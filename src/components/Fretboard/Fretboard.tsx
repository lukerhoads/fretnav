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
import {
  getNote,
  getNoteSemitoneOffset,
  getSemitoneOffset,
} from "@/utils/note";
import { DEFAULT_TUNING } from "@/constants/notes";
import { DEFAULT_RESIZE_CONFIG, ResizeConfig } from "@/types/resize";
import {
  DOT_POSITIONS,
  stringLabelDivStyles,
  stringLabelPStyles,
} from "@/constants/styles";
import { defaultScales } from "@/constants/scales";
import { Action, PositionAction, DragAction } from "@/types/actions";

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
  highlightedScale: string;
  mutedStrings?: number[];
  resizeToHighlight?: boolean;
  activeScaleShowSemitones?: boolean;
  relativeSemitonePositionIndex: number | null;
  shiftOnMove?: boolean;
  lessonPlayerActive?: boolean;
  onPositionAdd?: (fret: number, gt_string: number) => void;
  onPositionHighlight?: (fret: number, string: number) => void;
  onPositionDelete?: (fret: number, gt_string: number) => void;
  onPositionChange?: (newPositions: PositionConfig[]) => void;
};

const Fretboard = ({
  tuning = DEFAULT_TUNING,
  mutedStrings = [],
  initial_positions = [],
  moveable = false,
  lefty = false,
  activeScaleShowSemitones = true,
  resizeToHighlight = false,
  highlightedScale = "",
  showNotes = false,
  overlaidPatterns = [],
  relativeSemitonePositionIndex,
  shiftOnMove = false,
  lessonPlayerActive = false,
  onPositionAdd = () => {},
  onPositionHighlight = () => {},
  onPositionDelete = () => {},
  onPositionChange = () => {},
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
  const [fretGap, setFretGap] = useState(23);
  const [semitoneShift, setSemitoneShift] = useState(false);
  const [vertical, setVertical] = useState(false);
  const [lastAction, setLastAction] = useState<Action | null>(null);

  const handleRightClick = (e: any, gt_string: number, fret: number) => {
    e.preventDefault();
    onPositionDelete(fret, gt_string);
    setLastAction({
      type: "DELETE",
      fret: fret,
      gt_string: gt_string,
    });
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
      if (e.key == "Enter") {
        onPositionChange(draggingPositions);
        setLastAction({
          newPositions: draggingPositions,
          oldPositions: initialPositions,
        });
      }
      cleanUp();
    } else if (e.keyCode == 90 && e.ctrlKey) {
      if (lastAction) {
        if ((lastAction as PositionAction).type != undefined) {
          let action = lastAction as PositionAction;
          if (action.type == "ADD")
            onPositionDelete(action.fret, action.gt_string);
          else onPositionAdd(action.fret, action.gt_string);
        } else if ((lastAction as DragAction).oldPositions != undefined) {
          setPositions((lastAction as DragAction).oldPositions);
          onPositionChange((lastAction as DragAction).oldPositions);
        }

        setLastAction(null);
      }
    }
  };

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
          ending_fret: 23,
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

        if (config.ending_fret > 23) config.ending_fret = 23;
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

        console.log(config);
      }
    } else {
      setResizeConfig(DEFAULT_RESIZE_CONFIG);
    }
  }, [resizeToHighlight, bc, positions, width]);

  useEffect(() => {
    setVertical(width < 1000);
  }, [width]);

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
      const fret_width = rect.width / fretGap;
      const string_height = rect.height / (vertical ? fretGap : stringGap);
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
        gridTemplateRows: `min-content repeat(${vertical ? fretGap : stringGap}, auto)`,
        gridTemplateColumns: ` min-content repeat(${vertical ? stringGap : fretGap}, auto)`,
      }}
    >
      <div
        className={styles.fret_labels}
        style={{
          gridTemplateColumns: `repeat(${vertical ? stringGap + 1 : fretGap}, ${(100 / (vertical ? stringGap + 1 : fretGap)).toFixed(5)}%)`,
          gridColumn: `2 / span ${vertical ? stringGap : fretGap}`,
          padding: vertical ? "20px 0" : "10px 0",
          // padding: "10px 0",
        }}
      >
        {(vertical
          ? arrayRange(
              resizeConfig.starting_string,
              resizeConfig.ending_string - 1,
              1,
            )
          : arrayRange(
              resizeConfig.starting_fret + 1,
              resizeConfig.ending_fret,
              1,
            )
        ).map((i) => (
          <div
            key={i}
            style={
              vertical
                ? Object.assign(
                    {
                      flexDirection: "column",
                    },
                    stringLabelDivStyles,
                  )
                : undefined
            }
          >
            {vertical ? (
              <p
                style={
                  vertical
                    ? {
                        position: "absolute" as any,
                        right: "-7px",
                      }
                    : undefined
                }
                className={mutedStrings.includes(6 - i) ? styles.muted : ""}
              >
                {tuning[i]}
              </p>
            ) : (
              <p>{i}</p>
            )}
          </div>
        ))}
      </div>
      <div
        className={styles.string_labels}
        style={{
          gridTemplateRows: `repeat(${vertical ? fretGap : stringGap + 1}, ${(100 / (vertical ? fretGap : stringGap + 1)).toFixed(5)}%)`,
          gridRow: `2 / span ${vertical ? fretGap : stringGap}`,
          padding: vertical ? "0 10px" : "0 20px",
        }}
      >
        {(!vertical
          ? arrayRange(
              resizeConfig.starting_string,
              resizeConfig.ending_string - 1,
              1,
            )
          : arrayRange(
              resizeConfig.starting_fret + 1,
              resizeConfig.ending_fret,
              1,
            )
        ).map((i) => (
          <div
            key={i}
            style={
              !vertical
                ? stringLabelDivStyles
                : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
          >
            {vertical ? (
              <p>{i}</p>
            ) : (
              <p
                style={stringLabelPStyles}
                className={mutedStrings.includes(i + 1) ? styles.muted : ""}
              >
                {tuning[tuning.length - 1 - i]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div
        className={styles.board_container}
        ref={bc}
        style={{
          gridRow: `2 / span ${vertical ? fretGap : stringGap}`,
          gridColumn: `2 / span ${vertical ? stringGap : fretGap}`,
          minHeight: `${(vertical ? fretGap : stringGap) * 42}px`,
        }}
      >
        <div
          className={styles.board}
          style={{
            gridTemplateRows: `repeat(${vertical ? fretGap : stringGap}, auto)`,
            gridTemplateColumns: `repeat(${vertical ? stringGap + 1 : fretGap}, auto)`,
          }}
        >
          {[
            ...new Set(
              arrayRange(
                resizeConfig.starting_string,
                resizeConfig.ending_string,
                1,
              )
                .map((i) => arrayRange(i * 23, i * 23 + fretGap - 1, 1))
                .flat()
                .filter((i) => i < 161)
                .filter((i) => i >= 0),
            ),
          ].map((i) => {
            let fret =
              (vertical
                ? Math.floor(i / (vertical ? stringGap + 1 : fretGap))
                : i % (vertical ? stringGap : fretGap)) + 1; // resizeConfig.starting_fret + ((i % fretGap) + 1)
            let gt_string = vertical
              ? 6 - (i % (vertical ? stringGap + 1 : fretGap))
              : Math.floor(i / (vertical ? stringGap : fretGap)); // resizeConfig.starting_string + Math.floor(i / fretGap)
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

            let semitoneScaleOffset: number | null = null;
            if (highlightedScale != "") {
              let scale = defaultScales.find((s) => s.name == highlightedScale);
              if (scale) {
                let offset = scale.notes.indexOf(note) + 1;
                let real_offset = getNoteSemitoneOffset(scale.notes[0], note);
                if (offset > 0) {
                  semitoneScaleOffset = activeScaleShowSemitones
                    ? real_offset
                    : offset;
                }
              }
            }
            return (
              <div
                key={i}
                className={styles.fret_box}
                style={{
                  borderTop:
                    !vertical && gt_string - resizeConfig.starting_string > 0
                      ? `3px solid ${string_muted}`
                      : "1px solid black",
                  borderRight:
                    vertical && gt_string - resizeConfig.starting_string > 0
                      ? `3px solid ${string_muted}`
                      : (vertical && gt_string > 0) || (!vertical && fret < 23)
                        ? "1px solid black"
                        : undefined,
                  borderLeft:
                    (vertical && gt_string == 6) || (!vertical && fret == 1)
                      ? "1px solid black"
                      : undefined,
                }}
              >
                {relativeSemitonePositionIndex != null &&
                  semitoneOffset &&
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
                      onMouseDown={(e) => {
                        if (moveable && !lessonPlayerActive && e.button == 0)
                          start(fret, gt_string);
                      }}
                      onContextMenu={(e) =>
                        handleRightClick(e, gt_string, fret)
                      }
                      className={styles.fret_position}
                      style={Object.assign(
                        {
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
                        },
                        vertical
                          ? {
                              left: "-17px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }
                          : {
                              bottom: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            },
                      )}
                      onClick={() => onPositionHighlight(fret, gt_string)}
                    >
                      <p>{config.label}</p>
                    </button>
                  ) : (
                    <button
                      className={styles.fret_position}
                      style={Object.assign(
                        {
                          backgroundColor: "transparent",
                        },
                        vertical
                          ? {
                              left: "-17px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }
                          : {
                              bottom: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            },
                      )}
                      onClick={() => {
                        onPositionAdd(fret, gt_string);
                        setLastAction({
                          type: "ADD",
                          fret: fret,
                          gt_string: gt_string,
                        });
                      }}
                    />
                  ))}
                {gt_string < 6 &&
                  highlightedScale != "" &&
                  semitoneScaleOffset != null && (
                    <button
                      className={styles.fret_position}
                      style={Object.assign(
                        {
                          backgroundColor:
                            semitoneScaleOffset != null
                              ? `rgba(255, 165, 0, ${1 - semitoneScaleOffset / (activeScaleShowSemitones ? 13 : 8)})`
                              : undefined,
                          border: "1px solid rgba(255, 165, 0, 1)",
                        },
                        vertical
                          ? {
                              left: "-17px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }
                          : {
                              bottom: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            },
                      )}
                      disabled={true}
                    >
                      {semitoneScaleOffset}
                    </button>
                  )}
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
                      onContextMenu={(e) =>
                        handleRightClick(e, gt_string, fret)
                      }
                      className={styles.fret_position}
                      style={Object.assign(
                        {
                          backgroundColor: c.color,
                          opacity: 0.5,
                          border: "1px solid transparent",
                          pointerEvents: "none" as any,
                        },
                        vertical
                          ? {
                              left: "-17px",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }
                          : {
                              bottom: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            },
                      )}
                    >
                      <p>{c.label}</p>
                    </button>
                  ))}
                {DOT_POSITIONS.find(
                  (p) =>
                    p.fret == fret &&
                    p.string == gt_string /*gt_string * 20 + fret - 1*/,
                ) != undefined && (
                  <div
                    className={styles.dot}
                    style={{
                      width: bc.current
                        ? bc.current.getBoundingClientRect().width /
                          (vertical ? stringGap : fretGap) /
                          (vertical ? 5 : 3)
                        : "20px",
                      height: bc.current
                        ? bc.current.getBoundingClientRect().width /
                          (vertical ? stringGap : fretGap) /
                          (vertical ? 5 : 3)
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
