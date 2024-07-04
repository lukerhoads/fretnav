import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Pattern, PositionConfig } from "@/types/pattern";
import styles from "./fretboard.module.css";
import useMousePosition from "@/app/hooks/useMousePosition";
import { getNote, getSemitoneOffset } from "@/utils/note";
import { DEFAULT_TUNING } from "@/constants/notes";
import { DEFAULT_RESIZE_CONFIG, ResizeConfig } from "@/types/resize";
import { DOT_INDEXES } from "@/constants/styles";

// TODO: shift to vertical after certain width achieved

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step,
  );

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

type Props = {
  tuning: string[];
  initial_positions: PositionConfig[];
  moveable: boolean;
  overlaidPatterns?: Pattern[];
  lefty?: boolean;
  showNotes?: boolean;
  mutedStrings?: number[];
  resizeToHighlight?: boolean;
  relativeSemitonePositionIndex: number | null;
  shiftOnMove?: boolean;
  onPositionAdd?: (idx: number, note: string) => void;
  onPositionHighlight?: (idx: number, fret: number, string: number) => void;
  onPositionDelete?: (idx: number) => void;
};

const Fretboard = ({
  tuning = DEFAULT_TUNING,
  mutedStrings = [],
  initial_positions = [],
  moveable = false,
  lefty = false,
  resizeToHighlight = false,
  showNotes = false,
  overlaidPatterns = [],
  relativeSemitonePositionIndex,
  shiftOnMove = false,
  onPositionAdd = () => {},
  onPositionHighlight = () => {},
  onPositionDelete = () => {},
}: Props) => {
  const [width, height] = useWindowSize();
  const mousePosition = useMousePosition();
  const [controllerString, setControllerString] = useState(-1);
  const [controllerFret, setControllerFret] = useState(-1);
  const [initialPositions, setInitialPositions] = useState<PositionConfig[]>(
    [],
  );
  const [draggingPositions, setDraggingPositions] = useState<PositionConfig[]>(
    [],
  );
  const [dragging, setDragging] = useState(false);
  const [counter, setCounter] = useState<NodeJS.Timeout | null>(null);
  const bc = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState(initial_positions);
  const [resizeConfig, setResizeConfig] = useState<ResizeConfig>(
    DEFAULT_RESIZE_CONFIG,
  );
  const [stringGap, setStringGap] = useState(6);
  const [fretGap, setFretGap] = useState(20);
  const [semitoneShift, setSemitoneShift] = useState(false);

  const handleRightClick = (e: any, idx: number) => {
    e.preventDefault();
    onPositionDelete(idx);
  };

  const start = (fret: number, string: number) => {
    setCounter(
      setTimeout(() => {
        setDragging(true);
        setControllerFret(fret);
        setControllerString(string);
        setInitialPositions(positions);
        setDraggingPositions(positions);
        document.addEventListener("keydown", keyPressed);
        // document.addEventListener("mouseup", mouseUp)
      }, 500),
    );
  };

  const cleanUp = () => {
    if (counter) clearInterval(counter);
    setDragging(false);
    setDraggingPositions([]);
    setInitialPositions([]);
    setControllerFret(-1);
    setControllerString(-1);
  };

  const keyPressed = (e: any) => {
    if ((e.key == "Escape" || e.key == "Enter") && dragging) {
      if (relativeSemitonePositionIndex != null)
        console.log(
          "Relative semitone: ",
          draggingPositions[relativeSemitonePositionIndex],
          positions[relativeSemitonePositionIndex],
        );
      setPositions(e.key == "Escape" ? initialPositions : draggingPositions);
      cleanUp();
    }
  };

  // useEffect(() => {
  // let semitoneOffset =
  //   relativeSemitonePositionIndex != null && (draggingPositions.length > relativeSemitonePositionIndex || initial_positions.length > relativeSemitonePositionIndex) &&
  //   getSemitoneOffset(
  //     controllerFret,
  //     controllerString,
  //     dragging && draggingPositions.length > 0
  //       ? draggingPositions[relativeSemitonePositionIndex].fret
  //       : positions[relativeSemitonePositionIndex].fret,
  //     dragging && draggingPositions.length > 0
  //       ? draggingPositions[relativeSemitonePositionIndex].guitar_string
  //       : positions[relativeSemitonePositionIndex].guitar_string,
  //     tuning,
  //   );

  //   // something buggy here
  // setSemitoneShift(semitoneOffset != null && semitoneOffset != 0);
  // }, [controllerFret, controllerString]);

  useEffect(() => {
    setPositions([...initial_positions]);
    if (initialPositions.length == 0) {
      setDraggingPositions([]);
      setInitialPositions([]);
    }
  }, [initial_positions]);

  useEffect(() => {
    setStringGap(resizeConfig.ending_string - resizeConfig.starting_string);
    setFretGap(resizeConfig.ending_fret - resizeConfig.starting_fret);
  }, [resizeConfig]);

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    return () => {
      document.removeEventListener("keydown", keyPressed);
    };
  }, [initialPositions, draggingPositions]);

  useEffect(() => {
    if (resizeToHighlight) {
      if (bc.current && positions.length > 0) {
        let config: ResizeConfig = {
          starting_fret: 0,
          ending_fret: 20,
          starting_string: 0,
          ending_string: 6,
        };
        const rect = bc.current.getBoundingClientRect();
        let minFret = Math.min(...positions.map((p) => p.fret));
        let maxFret = Math.max(...positions.map((p) => p.fret));
        let minString = Math.min(...positions.map((p) => p.guitar_string));
        let maxString = Math.max(...positions.map((p) => p.guitar_string));
        let idealRectWidth = 50;
        let idealRectHeight = idealRectWidth / 1.45;
        let idealFrets = Math.floor(rect.width / idealRectWidth);
        let idealStrings = Math.floor(rect.height / idealRectHeight);
        config.starting_fret = minFret == 0 ? 0 : minFret - 1;
        if (idealFrets < maxFret - minFret + 2) {
          // min fret - 1 starting
          // max fret + 1 ending
          config.ending_fret = maxFret + 1;
        } else {
          // min fret - 1 starting
          config.ending_fret = minFret - 1 + idealFrets;
          // min fret - 1 + idealFrets ending
        }

        if (config.ending_fret > 20) config.ending_fret = 20;
        config.starting_string = minString == 0 ? 0 : minString - 1;
        if (idealStrings < maxString - minString + 2) {
          // min fret - 1 starting
          // max fret + 1 ending
          config.ending_string = maxString + 1;
        } else {
          // min fret - 1 starting
          config.ending_string = minString - 1 + idealStrings;
          // min fret - 1 + idealFrets ending
        }

        // console.log(config);
        // console.log(config.starting_string * (fretGap), (config.ending_string + 1)*(fretGap) - 1)
        if (config.ending_string > 6) config.ending_string = 6;
        if (
          config.ending_fret > config.starting_fret &&
          config.ending_string > config.starting_string
        )
          setResizeConfig(config);
      }
    } else {
      setResizeConfig(DEFAULT_RESIZE_CONFIG);
    }
  }, [resizeToHighlight, bc, positions, width]);

  useEffect(() => {
    if (
      dragging &&
      draggingPositions.length > 0 &&
      mousePosition != null &&
      mousePosition.x != null &&
      mousePosition.y != null &&
      bc.current
    ) {
      const rect = bc.current.getBoundingClientRect();
      const fret_width = rect.width / 20;
      const string_height = rect.height / 7;
      const x = mousePosition.x - rect.x;
      const y = mousePosition.y - rect.y;
      let closest_fret = Math.floor(x / fret_width) + 1;
      let string_div = Array.from(Array(7).keys())
        .filter((i) => i != 0)
        .map((i) => Math.abs(string_height * i - y));
      let closest_string = string_div.indexOf(Math.min(...string_div));
      if (
        controllerFret != closest_fret ||
        controllerString != closest_string
      ) {
        let fret_change = closest_fret - controllerFret;
        let string_change = closest_string - controllerString;
        let intDrag = [...draggingPositions].map((p) => ({
          ...p,
          guitar_string: p.guitar_string + string_change,
          fret: p.fret + fret_change,
        }));
        let newDraggingPositions = intDrag.map((p) =>
          p.sync_to_note
            ? {
                ...p,
                label: getNote(p.fret, p.guitar_string, tuning),
              }
            : p,
        );
        setDraggingPositions(newDraggingPositions);
        setControllerFret(controllerFret + fret_change);
        setControllerString(controllerString + string_change);
      }
    }
  }, [mousePosition]);

  return (
    <div
      className={styles.fretboard}
      style={{
        gridTemplateRows: `repeat(${stringGap + 1}, auto)`,
        gridTemplateColumns: `repeat(${fretGap + 1}, auto)`,
      }}
    >
      <div
        className={styles.fret_labels}
        style={{
          gridTemplateColumns: `repeat(${fretGap}, ${(100 / fretGap).toFixed(5)}%)`,
          gridColumn: `2 / span ${fretGap}`,
        }}
      >
        {arrayRange(
          resizeConfig.starting_fret,
          resizeConfig.ending_fret - 1,
          1,
        ).map((i) => (
          <div key={i}>
            <p>{i + 1}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.string_labels}
        style={{
          gridTemplateRows: `repeat(${stringGap + 1}, ${(100 / (stringGap + 1)).toFixed(5)}%)`,
          gridRow: `2 / span ${stringGap}`,
        }}
      >
        {arrayRange(
          resizeConfig.starting_string,
          resizeConfig.ending_string - 1,
          1,
        ).map((i) => (
          <div key={i}>
            <p className={mutedStrings.includes(i + 1) ? styles.muted : ""}>
              {tuning[5 - i]}
            </p>
          </div>
        ))}
      </div>
      <div
        className={styles.board_container}
        ref={bc}
        style={{
          gridRow: `2 / span ${stringGap}`,
          gridColumn: `2 / span ${fretGap}`,
        }}
      >
        <img
          src="/fretboard-markers.png"
          alt="board"
          className={styles.board_image}
        />
        <div
          className={styles.board}
          style={{
            gridTemplateRows: `repeat(${stringGap}, auto)`,
            gridTemplateColumns: `repeat(${fretGap}, auto)`,
          }}
        >
          {[
            ...new Set(
              arrayRange(
                resizeConfig.starting_string,
                resizeConfig.ending_string,
                1,
              )
                .map((i) => arrayRange(i * 20, i * 20 + fretGap - 1, 1))
                .flat()
                .filter((i) => i < 140)
                .filter((i) => i >= 0),
            ),
          ].map((i) => {
            let fret = (i % 20) + 1; // resizeConfig.starting_fret + ((i % fretGap) + 1)
            let gt_string = Math.floor(i / 20); // resizeConfig.starting_string + Math.floor(i / fretGap)
            let config = (dragging ? draggingPositions : positions).find(
              (p) =>
                p.guitar_string == gt_string &&
                p.fret +
                  (shiftOnMove &&
                  gt_string < 2 &&
                  !initial_positions
                    .map((p) => p.guitar_string)
                    .includes(p.guitar_string)
                    ? 1
                    : 0) ==
                  fret,
            );
            let overlaidConfigs = overlaidPatterns
              .map((p) =>
                p.positions.find(
                  (c) => c.guitar_string == gt_string && c.fret == fret,
                ),
              )
              .filter((c) => c != undefined) as PositionConfig[];
            let note = getNote(fret, gt_string, tuning);
            let string_muted =
              "rgba(0, 0, 0, " +
              (mutedStrings.includes(gt_string) ? 0.5 : 1) +
              ")";
            // if (relativeSemitonePositionIndex != null)
            //   console.log("Relative semitone: ", dragging && draggingPositions.length > 0
            //     ? draggingPositions[relativeSemitonePositionIndex]
            //     : positions[relativeSemitonePositionIndex])
            let semitoneOffset =
              relativeSemitonePositionIndex != null &&
              (draggingPositions.length > relativeSemitonePositionIndex ||
                initial_positions.length > relativeSemitonePositionIndex) &&
              getSemitoneOffset(
                fret,
                gt_string,
                dragging && draggingPositions.length > 0
                  ? draggingPositions[relativeSemitonePositionIndex].fret
                  : positions[relativeSemitonePositionIndex].fret,
                dragging && draggingPositions.length > 0
                  ? draggingPositions[relativeSemitonePositionIndex]
                      .guitar_string
                  : positions[relativeSemitonePositionIndex].guitar_string,
                tuning,
              ) - (semitoneShift ? 1 : 0);
            // console.log(semitoneShift)
            if (semitoneOffset && semitoneOffset < 0)
              semitoneOffset = 12 + semitoneOffset;
            return (
              <div
                key={i}
                className={styles.fret_box}
                style={{
                  borderTop:
                    gt_string - resizeConfig.starting_string > 0
                      ? `3px solid ${string_muted}`
                      : "1px solid black",
                }}
              >
                {relativeSemitonePositionIndex != null &&
                  semitoneOffset != null && (
                    <>
                      <p
                        style={{
                          color: gt_string < 6 ? undefined : "transparent",
                          zIndex: 1,
                          position: "absolute",
                          bottom: showNotes ? "-20px" : "0px",
                        }}
                        className={styles.note}
                      >
                        {semitoneOffset}
                      </p>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          // transform: "translateY(-50%)",
                          width: "100%",
                          height: "100%",
                          backgroundColor:
                            gt_string < 6
                              ? `rgba(255, 165, 0, ${1 - semitoneOffset / 12})`
                              : undefined,
                        }}
                      />
                    </>
                  )}
                {gt_string < 6 &&
                  (config != undefined ? (
                    <button
                      disabled={dragging}
                      onMouseDown={() => moveable && start(fret, gt_string)}
                      onContextMenu={(e) => handleRightClick(e, i)}
                      className={styles.fret_position}
                      style={{
                        backgroundColor: config.color,
                        border: "1px solid transparent",
                        boxShadow:
                          overlaidConfigs.length > 0
                            ? overlaidConfigs
                                .map(
                                  (c, i) =>
                                    `0 0 0 ${2 * i + 1}px white, 0 0 0 ${2 * i + 2}px ${c.color}`,
                                )
                                .join(", ")
                            : "",
                        // boxShadow: "0 0 0 2px white, 0 0 0 3px green"
                      }}
                      onClick={() => onPositionHighlight(i, fret, gt_string)}
                    >
                      <p>{config.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.fret_position}
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => onPositionAdd(i, note)}
                    />
                  ))}
                {gt_string < 6 && showNotes && (
                  <p className={styles.note}>{note}</p>
                )}
                {gt_string < 6 &&
                  overlaidConfigs.length > 0 &&
                  config == undefined &&
                  overlaidConfigs.length > 0 &&
                  overlaidConfigs.map((c, i) => (
                    <button
                      key={i}
                      onContextMenu={(e) => handleRightClick(e, i)}
                      className={styles.fret_position}
                      style={{
                        backgroundColor: c.color,
                        opacity: 0.5,
                        border: "1px solid transparent",
                        pointerEvents: "none",
                      }}
                    >
                      <p>{c.label}</p>
                    </button>
                  ))}
                {DOT_INDEXES.includes(i /*gt_string * 20 + fret - 1*/) && (
                  <div
                    className={styles.dot}
                    style={{
                      width: bc.current
                        ? bc.current.getBoundingClientRect().width / fretGap / 3
                        : "20px",
                      height: bc.current
                        ? bc.current.getBoundingClientRect().width / fretGap / 3
                        : "20px",
                      backgroundColor:
                        relativeSemitonePositionIndex != null
                          ? "black"
                          : "lightgray",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fretboard;
