import { HeapAudioBuffer, RingBuffer } from "./lib/wasm-audio-helper.js";

class PitchDetector extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this._kernelBufferSize = options.processorOptions.kernelBufferSize;
    // RingBuffers for input.
    this._inputRingBuffer = new RingBuffer(
      this._kernelBufferSize,
      this._channelCount,
    );
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    this._inputRingBuffer.push(input);
    if (this._inputRingBuffer.framesAvailable >= this._kernelBufferSize) {
      // Get the queued data from the input ring buffer.
      let buf = new AudioBuffer({
        length: this._kernelBufferSize,
        sampleRate: 44100,
      });
      this._inputRingBuffer.pull(buf);
      let pitch = this.process_microphone_buffer(buf);
      if (pitch) self.postMessage({ pitch: pitch });
    }

    return true;
  }

  resample(audioBuffer, onComplete) {
    const interpolate = audioBuffer.sampleRate % 16000 != 0;
    const multiplier = audioBuffer.sampleRate / 16000;
    const original = audioBuffer.getChannelData(0);
    const subsamples = new Float32Array(1024);
    for (var i = 0; i < 1024; i++) {
      if (!interpolate) {
        subsamples[i] = original[i * multiplier];
      } else {
        // simplistic, linear resampling
        var left = Math.floor(i * multiplier);
        var right = left + 1;
        var p = i * multiplier - left;
        subsamples[i] = (1 - p) * original[left] + p * original[right];
      }
    }
    onComplete(subsamples);
  }

  process_microphone_buffer(inputs) {
    this.resample(inputs, function (resampled) {
      tf.tidy(() => {
        setRunning(true);

        // run the prediction on the model
        const frame = tf.tensor(resampled.slice(0, 1024));
        const zeromean = tf.sub(frame, tf.mean(frame));
        const framestd = tf.tensor(
          tf.norm(zeromean).dataSync() / Math.sqrt(1024),
        );
        const normalized = tf.div(zeromean, framestd);
        const input = normalized.reshape([1, 1024]);
        const activation = model.predict([input]).reshape([360]);

        // the confidence of voicing activity and the argmax bin
        const confidence = activation.max().dataSync()[0];
        const center = activation.argMax().dataSync()[0];

        // slice the local neighborhood around the argmax bin
        const start = Math.max(0, center - 4);
        const end = Math.min(360, center + 5);
        const weights = activation.slice([start], [end - start]);
        const cents = cent_mapping.slice([start], [end - start]);

        // take the local weighted average to get the predicted pitch
        const products = tf.mul(weights, cents);
        const productSum = products.dataSync().reduce((a, b) => a + b, 0);
        const weightSum = weights.dataSync().reduce((a, b) => a + b, 0);
        const predicted_cent = productSum / weightSum;
        const predicted_hz = 10 * Math.pow(2, predicted_cent / 1200.0);

        // update the UI and the activation plot
        if (confidence > 0.5) {
          return predicted_hz;
        } else return null;
      });
    });
  }
}

registerProcessor("pitch-detector", PitchDetector);
