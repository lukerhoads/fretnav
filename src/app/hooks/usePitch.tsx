import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

declare global {
  interface Window {
    model: tf.LayersModel;
  }
}

export type PitchInfo = {
  pitch: number | null;
  setup: () => Promise<void>;
  running: boolean;
};

export default function usePitch(): PitchInfo {
  const [pitch, setPitch] = useState<number | null>(null);
  const [running, setRunning] = useState(false);

  const setup = async () => {
    window.model = await tf.loadLayersModel("model/model.json");
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    let audioContext = new AudioContext();
    const mic = audioContext.createMediaStreamSource(stream);

    // We need the buffer size that is a power of two and is longer than 1024 samples when resampled to 16000 Hz.
    // In most platforms where the sample rate is 44.1 kHz or 48 kHz, this will be 4096, giving 10-12 updates/sec.
    const minBufferSize = (audioContext.sampleRate / 16000) * 1024;
    let bufferSize = 4;
    while (bufferSize < minBufferSize) bufferSize *= 2;
    // const scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
    // scriptNode.onaudioprocess = process_microphone_buffer;
    await audioContext.audioWorklet.addModule("worklets/PitchDetector.js");
    const pitchDetectionNode = new AudioWorkletNode(
      audioContext,
      "pitch-detector",
      {
        processorOptions: {
          kernelBufferSize: bufferSize,
        },
      },
    );

    if (pitchDetectionNode.port) {
      pitchDetectionNode.port.onmessage = (e) => {
        setPitch(e.data);
        console.log(e.data);
      };
    }

    // It seems necessary to connect the stream to a sink for the pipeline to work, contrary to documentataions.
    // As a workaround, here we create a gain node with zero gain, and connect temp to the system audio output.
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0, audioContext.currentTime);

    mic.connect(pitchDetectionNode);
    pitchDetectionNode.connect(gain);
    gain.connect(audioContext.destination);
  };

  return { pitch: pitch, setup: setup, running: running };
}
