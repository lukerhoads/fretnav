"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Position from "@/components/Position/Position";
import { Pattern, PositionConfig } from "@/types/pattern";
import Fretboard from "@/components/Fretboard/Fretboard";
import html2canvas from "html2canvas";
import { defaultGroupedOptions, patterns } from "@/constants/patterns";
import { useSearchParams } from "next/navigation";
import Select from "react-select";
import { customSelectStyles } from "@/constants/styles";
import { getNote } from "@/utils/note";
import { hyphenate } from "@/utils/hyphenate";
import { Song } from "@/types/song";
import { Lesson } from "@/types/lesson";
import Card from "@/components/Card/Card";
import Timeline from "@/components/Timeline/Timeline";
import usePitch from "@/app/hooks/usePitch";
import { createRoot } from "react-dom/client";
import { defaultScales, defaultScalesOptions } from "@/constants/scales";
import { lessons as builtInLessons } from "@/constants/lessons";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center" as const,
};

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeControllerNavItem, setActiveControllerNavItem] =
    useState("navigator");
  const [positions, setPositions] = useState<PositionConfig[]>([]);
  const [tuning, setTuning] = useState(["E", "A", "D", "G", "B", "E"]);
  const [lefty, setLefty] = useState(false);
  const [idxActive, setIdxActive] = useState(-1);
  const fretboardRef = useRef<HTMLDivElement>(null);
  const fretboard2Ref = useRef<HTMLDivElement>(null);
  const [showNotes, setShowNotes] = useState(false);
  const [userDefinedPatterns, setUserDefinedPatterns] = useState<Pattern[]>([]);
  const [userDefinedCategories, setUserDefinedCategories] = useState<string[]>(
    [],
  );
  const [activePattern, setActivePattern] = useState("None selected");
  const [activePatternMoveable, setActivePatternMoveable] = useState(false);
  const [activePatternMutedStrings, setActivePatternMutedStrings] = useState<
    number[]
  >([]);
  const [activePatternShiftOnMove, setActivePatternShiftOnMove] =
    useState(false);
  const [patternName, setPatternName] = useState("");
  const [patternCategory, setPatternCategory] = useState("");
  const [patternMoveable, setPatternMoveable] = useState(false);
  const [error, setError] = useState("");
  const [numOverlays, setNumOverlays] = useState(1);
  const [patternOverlays, setPatternOverlays] = useState<string[]>([
    "None selected",
  ]);
  const [positionOverlays, setPositionOverlays] = useState<Pattern[]>([]);
  const [createActive, setCreateActive] = useState(false);
  const [newMutedString, setNewMutedString] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>(builtInLessons);
  const [shiftPatternOnMove, setShiftPatternOnMove] = useState(false);
  const [relativeSemitonePositionIndex, setRelativeSemitonePositionIndex] =
    useState<number | null>(null);

  const [songCreatorActive, setSongCreatorActive] = useState(false);
  const [songName, setSongName] = useState("");
  const [songDescription, setSongDescription] = useState("");
  const [songBpm, setSongBpm] = useState(120);

  const [lessonCreatorActive, setLessonCreatorActive] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [lessonPatterns, setLessonPatterns] = useState<Pattern[]>([]);

  const [lessonPlayerActive, setLessonPlayerActive] = useState(false);
  // const [lessonPatternImageUrls, setLessonPatternImageUrls] = useState<
  //   string[]
  // >([]);
  const [lessonDescription, setLessonDescription] = useState("");
  const [activeLessonPatternIndex, setActiveLessonPatternIndex] = useState<
    number | null
  >(null);
  // const pitchInfo = usePitch();

  const [activeScale, setActiveScale] = useState("");
  const [activeScaleShowSemitones, setActiveScaleShowSemitones] =
    useState(true);

  const onPositionHighlight = (idx: number, fret: number, string: number) => {
    let idx_active = positions.findIndex(
      (p) => p.guitar_string == string && p.fret == fret,
    );
    setIdxActive(idx_active);
    setTimeout(() => {
      setIdxActive(-1);
    }, 2000);
  };

  const onPositionAdd = (idx: number, note: string) => {
    let fret = (idx % 23) + 1;
    let string = Math.floor(idx / 23);
    setPositions([
      ...positions,
      {
        guitar_string: string,
        fret: fret,
        label: note,
        color: "black",
      },
    ]);
  };

  const onPositionDelete = (idx: number) => {
    // console.log("Deleting ", idx)
    let fret = (idx % 23) + 1;
    let string = Math.floor(idx / 23);
    setPositions(
      positions.filter((p) => p.guitar_string != string || p.fret != fret),
    );
  };

  const cropCanvas = (
    sourceCanvas: HTMLCanvasElement,
    left: number,
    top: number,
    width: number,
    height: number,
  ) => {
    let destCanvas = document.createElement("canvas");
    destCanvas.width = width;
    destCanvas.height = height;
    if (destCanvas != null) {
      destCanvas.getContext("2d").drawImage(
        sourceCanvas,
        left,
        top,
        width,
        height, // source rect with content to crop
        0,
        0,
        width,
        height,
      ); // newCanvas, same size as source rect
    }
    return destCanvas;
  };

  const getFretboardImageURL = async (crop: boolean = false) => {
    let element = fretboardRef.current;
    if (element == null) return;
    const canvas = await html2canvas(element);
    if (crop) {
      let baseX = canvas.width * 0.0434783;
      let baseY = canvas.height * 0.1428571;
      let fretWidth = canvas.width / 24;
      let minFret = Math.min(...positions.map((p) => p.fret)) - 1;
      if (minFret < 0) minFret = 0;
      console.log(minFret, fretWidth);
      let croppedCanvas = cropCanvas(
        canvas,
        baseX + minFret * fretWidth + canvas.height * (11 / 7) > canvas.width
          ? canvas.width - canvas.height * (11 / 7)
          : minFret * fretWidth,
        baseY,
        canvas.height * (11 / 7),
        canvas.height,
      );
      const data = croppedCanvas.toDataURL("image/jpg");
      return data;
    }
    let data = canvas.toDataURL("image/jpg");
    return data;
  };

  const updateFretboardImageCanvas = async () => {
    let url = await getFretboardImageURL(true);
    let img = document.createElement("img");
    console.log(url);
    if (url) img.src = url;
    let elem = document.getElementById(
      `lesson-pattern-${activeLessonPatternIndex}`,
    );
    if (elem) {
      elem.innerHTML = "";
      elem.appendChild(img);
    }
  };

  const downloadFretboardImage = async () => {
    const data = await getFretboardImageURL();
    const link = document.createElement("a");
    if (typeof link.download === "string" && data) {
      link.href = data;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const createNewPattern = () => {
    // TODO: have this sync to user defined storage in firebase
    if (patternName == "") {
      setError("Pattern cannot have no name");
      return;
    }

    let pattern: Pattern = {
      name: patternName,
      positions: positions,
    };

    if (patternCategory != "") {
      pattern.category = patternCategory;
    }

    if (patternMoveable) {
      pattern.moveable = true;
    }

    if (shiftPatternOnMove) {
      pattern.shiftOnMove = true;
    }

    if (activePatternMutedStrings.length > 0) {
      pattern.mutedStrings = activePatternMutedStrings;
    }

    console.log(pattern);
    if (userDefinedPatterns.find((p) => p.name == patternName)) {
      setError("Pattern with that name already exists");
    }

    setUserDefinedPatterns([...userDefinedPatterns, pattern]);
    setActivePattern(patternName);
    setPatternName("");
  };

  const clearFretboard = () => {
    setPositions([]);
    setActivePattern("None selected");
    setActivePatternMutedStrings([]);
    setNewMutedString("");
    setActivePatternShiftOnMove(false);
    setRelativeSemitonePositionIndex(null);
  };

  const incrementNumOverlays = () => {
    if (numOverlays > 3) {
      setError("Reached maximum number of overlays");
      return;
    }
    setNumOverlays(numOverlays + 1);
    setPatternOverlays([...patternOverlays, "none"]);
  };

  const decrementNumOverlays = () => {
    setNumOverlays(numOverlays - 1);
    setPatternOverlays(patternOverlays.slice(0, -1));
  };

  const clearOverlays = () => {
    setPatternOverlays(patternOverlays.map((_) => "none"));
  };

  const alterPatternOverlays = (idx: number, pattern: string) => {
    let newPatternOverlays = [...patternOverlays];
    newPatternOverlays[idx] = pattern;
    setPatternOverlays(newPatternOverlays);
  };

  const makeOverlayActive = (idx: number) => {
    let oldActivePattern = activePattern;
    setActivePattern(patternOverlays[idx]);
    setPatternOverlays(
      patternOverlays.map((p, i) => (i == idx ? oldActivePattern : p)),
    );
  };

  const shareElement = (tab: string, name: string) => {
    let url = new URL("http://localhost:3000/app");
    let urlParams = new URLSearchParams(url.search);
    urlParams.append("tab", tab);
    urlParams.append("pattern", hyphenate(activePattern));
    navigator.clipboard.writeText(url.toString() + "?" + urlParams.toString());
  };

  const keyPressed = (e: any) => {
    console.log("hey", e.key);
    if (
      e.key == "c" &&
      lessonPlayerActive &&
      activeLessonPatternIndex != null
    ) {
      console.log("hey!");
      // setActiveLessonPatternIndex(activeLessonPatternIndex + 1)
    }
  };

  useEffect(() => {
    if (
      activeLessonPatternIndex != null &&
      lessonPatterns.length > 0 &&
      activeLessonPatternIndex < lessonPatterns.length
    ) {
      setActivePattern(lessonPatterns[activeLessonPatternIndex].name);
      setPositions(lessonPatterns[activeLessonPatternIndex].positions);
      if (lessonPatterns[activeLessonPatternIndex].mutedStrings) {
        setActivePatternMutedStrings(
          lessonPatterns[activeLessonPatternIndex].mutedStrings,
        );
      }
    } else {
      clearFretboard();
    }
  }, [lessonPatterns, activeLessonPatternIndex]);

  useEffect(() => {
    if (!lessonCreatorActive) {
      // setActivePattern("");
      // setPositions([]);
      // setActivePatternMutedStrings([]);
      clearFretboard();
    }
  }, [lessonCreatorActive]);

  useEffect(() => {
    let newPatternOverlays: Pattern[] = [];
    patternOverlays.forEach((p) => {
      if (p != "none") {
        let patternPositions = userDefinedPatterns.find((c) => c.name == p);
        if (patternPositions) {
          newPatternOverlays.push(patternPositions);
          return;
        }

        patternPositions = patterns.find((c) => c.name == p);
        if (patternPositions) {
          newPatternOverlays.push(patternPositions);
          return;
        }
      }
    });

    setPositionOverlays(newPatternOverlays);
  }, [patternOverlays]);

  useEffect(() => {
    if (activePattern && activePattern != "" && activePattern != "none") {
      let pattern = patterns.find((p) => p.name == activePattern);
      if (pattern) {
        setPositions(pattern.positions);
        if (pattern.moveable) setActivePatternMoveable(pattern.moveable);
        else setActivePatternMoveable(false);
        if (pattern.mutedStrings)
          setActivePatternMutedStrings(pattern.mutedStrings);
        else setActivePatternMutedStrings([]);
        if (pattern.shiftOnMove) setActivePatternShiftOnMove(true);
        else setActivePatternShiftOnMove(false);
        return;
      }

      pattern = userDefinedPatterns.find((p) => p.name == activePattern);
      if (pattern) {
        setPositions(pattern.positions);
        if (pattern.moveable) setActivePatternMoveable(pattern.moveable);
        else setActivePatternMoveable(false);
        if (pattern.mutedStrings)
          setActivePatternMutedStrings(pattern.mutedStrings);
        else setActivePatternMutedStrings([]);
        if (pattern.shiftOnMove) setActivePatternShiftOnMove(true);
        else setActivePatternShiftOnMove(false);
        return;
      }
    } else if (activePattern == "None selected") {
      clearFretboard();
    }
  }, [activePattern]);

  useEffect(() => {
    if (positions.length == 0) {
      setRelativeSemitonePositionIndex(null);
    }

    if (
      activeLessonPatternIndex != null &&
      !lessonPlayerActive &&
      activeLessonPatternIndex < lessonPatterns.length
    ) {
      let newLessonPatterns = [...lessonPatterns];
      newLessonPatterns[activeLessonPatternIndex].positions = positions;
      setLessonPatterns(newLessonPatterns);
      // updateFretboardImageCanvas();
    }
  }, [positions]);

  useEffect(() => {
    let desiredTab = searchParams.get("tab");
    if (desiredTab != null && desiredTab != "") {
      setActiveControllerNavItem(desiredTab);
    }
  }, []);

  useEffect(() => {
    let desiredPattern = searchParams.get("pattern");
    if (desiredPattern != null && desiredPattern != "") {
      for (let i = 0; i < patterns.length; i++) {
        if (hyphenate(patterns[i].name) == desiredPattern) {
          setActivePattern(patterns[i].name);
          return;
        }
      }

      for (let i = 0; i < userDefinedPatterns.length; i++) {
        if (hyphenate(userDefinedPatterns[i].name) == desiredPattern) {
          setActivePattern(userDefinedPatterns[i].name);
          return;
        }
      }
    }

    let userCategories = new Set<string>();
    userDefinedPatterns.forEach((p) => {
      if (p.category) {
        userCategories.add(p.category);
      }
    });

    setUserDefinedCategories(Array.from(userCategories));
  }, [userDefinedPatterns]);

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div className={styles.controller}>
          <div className={styles.controller_nav}>
            <div
              className={
                styles.controller_nav_item +
                (activeControllerNavItem == "navigator"
                  ? " " + styles.controller_nav_item_active
                  : "")
              }
              onClick={() => setActiveControllerNavItem("navigator")}
            >
              <p>Navigator</p>
            </div>
            {/* <div
              className={
                styles.controller_nav_item +
                (activeControllerNavItem == "songs"
                  ? " " + styles.controller_nav_item_active
                  : "")
              }
              onClick={() => setActiveControllerNavItem("songs")}
            >
              <p>Songs</p>
            </div> */}
            <div
              className={
                styles.controller_nav_item +
                (activeControllerNavItem == "lessons"
                  ? " " + styles.controller_nav_item_active
                  : "")
              }
              onClick={() => setActiveControllerNavItem("lessons")}
            >
              <p>Lessons</p>
            </div>
            <div
              className={
                styles.controller_nav_item +
                (activeControllerNavItem == "settings"
                  ? " " + styles.controller_nav_item_active
                  : "")
              }
              onClick={() => setActiveControllerNavItem("settings")}
            >
              <p>Settings</p>
            </div>
          </div>
          <div className={styles.controller_body}>
            {activeControllerNavItem == "navigator" && (
              <>
                <div className={styles.controller_navigator}>
                  <p>Pattern</p>
                  <div className={styles.controller_selectors}>
                    <Select
                      value={{ value: activePattern, label: activePattern }}
                      onChange={(e: any, f) =>
                        f.action == "select-option" &&
                        e &&
                        e.value &&
                        setActivePattern(e.value)
                      }
                      formatGroupLabel={formatGroupLabel}
                      options={defaultGroupedOptions.concat({
                        label: "User Defined",
                        options: userDefinedPatterns.map((p) => ({
                          value: p.name,
                          label: p.name,
                        })),
                      })}
                      styles={customSelectStyles}
                    />
                    <button onClick={() => clearFretboard()}>Clear</button>
                    <button onClick={downloadFretboardImage}>
                      Download Fretboard Image
                    </button>
                    <button onClick={() => console.log(positions)}>
                      Print Pattern
                    </button>
                    <button
                      onClick={() =>
                        shareElement(activeControllerNavItem, activePattern)
                      }
                    >
                      Share Pattern
                    </button>
                    {positions.length > 0 && (
                      <button onClick={() => setCreateActive(true)}>
                        Create Pattern
                      </button>
                    )}
                  </div>
                  <p>Pattern Overlays</p>
                  <div className={styles.controller_selectors}>
                    {Array.from(Array(numOverlays).keys()).map((i) => (
                      <div className={styles.pattern_overlay} key={i}>
                        <Select
                          value={{
                            value: patternOverlays[i],
                            label: patternOverlays[i],
                          }}
                          onChange={(e: any, f) =>
                            f.action == "select-option" &&
                            e &&
                            e.value &&
                            alterPatternOverlays(i, e.value)
                          }
                          formatGroupLabel={formatGroupLabel}
                          options={defaultGroupedOptions.concat({
                            label: "User Defined",
                            options: userDefinedPatterns.map((p) => ({
                              value: p.name,
                              label: p.name,
                            })),
                          })}
                          styles={customSelectStyles}
                        />
                        <button onClick={() => makeOverlayActive(i)}>SW</button>
                      </div>
                    ))}
                    <button
                      className={styles.controller_button_icon}
                      onClick={() => incrementNumOverlays()}
                    >
                      +
                    </button>
                    <button
                      className={styles.controller_button_icon}
                      onClick={() => decrementNumOverlays()}
                    >
                      -
                    </button>
                    <button
                      className={styles.controller_button}
                      onClick={() => clearOverlays()}
                    >
                      Clear
                    </button>
                  </div>
                  <p>Positions {activePatternMoveable ? "(Moveable)" : ""}</p>
                  <div className={styles.controller_positions}>
                    {positions.map((position, index) => (
                      <Position
                        key={index}
                        moveable={activePatternMoveable}
                        highlighted={index == idxActive}
                        {...position}
                        tuning={tuning}
                        onLabelChange={(label) =>
                          label.length < 3 &&
                          setPositions(
                            positions.map((p, i) =>
                              i == index ? { ...p, label } : p,
                            ),
                          )
                        }
                        show_relative_semitones={
                          relativeSemitonePositionIndex != null &&
                          relativeSemitonePositionIndex == index
                        }
                        onDelete={() =>
                          setPositions(positions.filter((_, i) => i != index))
                        }
                        onColorChange={(color) =>
                          setPositions(
                            positions.map((p, i) =>
                              i == index ? { ...p, color } : p,
                            ),
                          )
                        }
                        onRelativeSemitoneChange={(newRelativeSemitone) =>
                          newRelativeSemitone
                            ? setRelativeSemitonePositionIndex(index)
                            : setRelativeSemitonePositionIndex(null)
                        }
                      />
                    ))}
                    {positions.length == 0 && <p>No positions</p>}
                  </div>
                  <p>
                    Muted Strings{" "}
                    {activePatternMutedStrings.map((string, i) => (
                      <p key={i}>{string}</p>
                    ))}
                  </p>
                  {activePatternMutedStrings.length == 0 && (
                    <p>No muted strings</p>
                  )}
                  <div className={styles.controller_selectors}>
                    <input
                      type="text"
                      placeholder="New Muted String"
                      onChange={(e) => setNewMutedString(e.target.value)}
                    />
                    <button
                      className={styles.controller_button_icon}
                      onClick={() =>
                        Number(newMutedString)
                          ? setActivePatternMutedStrings([
                              ...activePatternMutedStrings,
                              Number(newMutedString),
                            ])
                          : setError("Invalid new muted string")
                      }
                    >
                      +
                    </button>
                    <button
                      className={styles.controller_button_icon}
                      onClick={() =>
                        setActivePatternMutedStrings(
                          activePatternMutedStrings.slice(0, -1),
                        )
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                {createActive && (
                  <div className={styles.create_popup}>
                    <p>Create new pattern</p>
                    <input
                      type="text"
                      placeholder="Pattern name"
                      onChange={(e) => setPatternName(e.target.value)}
                    />
                    <input
                      placeholder="Category"
                      list="category"
                      onChange={(e) => setPatternCategory(e.target.value)}
                    />
                    <datalist id="category">
                      {userDefinedCategories.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </datalist>
                    <label htmlFor="moveable">Moveable</label>
                    <input
                      id="moveable"
                      type="checkbox"
                      checked={patternMoveable}
                      onChange={() => setPatternMoveable(!patternMoveable)}
                    />
                    {patternMoveable && (
                      <>
                        <label htmlFor="shiftOnMove">Shift On Move</label>
                        <input
                          id="shiftOnMove"
                          type="checkbox"
                          checked={shiftPatternOnMove}
                          onChange={() =>
                            setShiftPatternOnMove(!shiftPatternOnMove)
                          }
                        />
                      </>
                    )}
                    <button onClick={() => setCreateActive(false)}>
                      Close
                    </button>
                    <button onClick={createNewPattern}>Save Pattern</button>
                  </div>
                )}
              </>
            )}

            {/* {activeControllerNavItem == "songs" && (
              <div className="controller-songs">
                {songs.length > 0 ? (
                  songs.map((song, i) => (
                    <Card
                      key={i}
                      img={song.thumbnail}
                      title={song.name}
                      subtitle={song.description}
                    />
                  ))
                ) : (
                  <p>No songs</p>
                )}
                {songCreatorActive && (
                  <>
                    <input
                      type="text"
                      placeholder="Song name"
                      onChange={(e) => setSongName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Song description"
                      onChange={(e) => setSongDescription(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Song bpm"
                      onChange={(e) => {
                        // todo: validate number
                        setSongBpm(parseInt(e.target.value));
                      }}
                    />
                    <button onClick={() => setSongCreatorActive(false)}>
                      Close
                    </button>
                    <Timeline
                      bpm={songBpm}
                      measures={[]}
                      setActiveMeasure={() => {}}
                    />
                  </>
                )}
                <button
                  onClick={() => setSongCreatorActive(true)}
                >
                  Create New Song
                </button>
              </div>
            )} */}
            {activeControllerNavItem == "lessons" && (
              <div className={styles.controller_lessons}>
                {lessonPlayerActive && (
                  <>
                    <h3>Lesson Player: {lessonName}</h3>
                    <div className={styles.lesson_patterns}>
                      {lessonPatterns.map((p, i) => (
                        <div
                          key={i}
                          className={styles.lesson_pattern}
                          onClick={() => setActiveLessonPatternIndex(i)}
                        >
                          {/* <div id={`lesson-pattern-${i}`}></div> */}
                          <p>
                            {p.name +
                              (activeLessonPatternIndex == i
                                ? " (active)"
                                : "")}
                          </p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        setLessonPlayerActive(false);
                        setActiveLessonPatternIndex(null);
                        setLessonPatterns([]);
                        setLessonName("");
                      }}
                    >
                      Exit
                    </button>
                  </>
                )}
                {lessons.length > 0 && !lessonPlayerActive && (
                  <>
                    <h3>Lessons</h3>
                    <div className={styles.controller_lessons_list}>
                      {lessons.map((lesson, i) => (
                        <div key={i} className={styles.card}>
                          <div className={styles.card_img}>
                            {lesson.thumbnail != undefined && (
                              <img src={undefined} alt={lesson.name} />
                            )}
                          </div>
                          <div className={styles.card_text}>
                            <h3>{lesson.name}</h3>
                            {lesson.description.length > 20 ? (
                              <p>{lesson.description.substring(0, 20)}...</p>
                            ) : lesson.description.length ? (
                              <p>{lesson.description}</p>
                            ) : null}
                            <button
                              onClick={() => {
                                setLessonPlayerActive(true);
                                setLessonName(lesson.name);
                                setActiveLessonPatternIndex(0);
                                setLessonPatterns(lesson.progression);
                              }}
                              style={{
                                width: "100%",
                                padding: "5px 0",
                                marginTop: "10px",
                              }}
                            >
                              Start
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {lessons.length == 0 && !lessonPlayerActive && (
                  <p>No lessons</p>
                )}
                {lessonCreatorActive && (
                  <>
                    <h3>Lesson Creator</h3>
                    <div className={styles.controller_selectors}>
                      <input
                        type="text"
                        placeholder="Lesson name"
                        onChange={(e) => setLessonName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Lesson description"
                        onChange={(e) => setLessonDescription(e.target.value)}
                      />
                    </div>
                    <div className={styles.lesson_patterns}>
                      {lessonPatterns.map((p, i) => (
                        <div
                          key={i}
                          className={styles.lesson_pattern}
                          onClick={() => setActiveLessonPatternIndex(i)}
                        >
                          {/* <div id={`lesson-pattern-${i}`}></div> */}
                          <Select
                            value={{
                              value: lessonPatterns[i].name,
                              label: lessonPatterns[i].name,
                            }}
                            onChange={(e: any, f) => {
                              if (f.action == "select-option" && e && e.value) {
                                let newPatterns = [...lessonPatterns];
                                let subPattern = patterns.find(
                                  (p) => p.name == e.value,
                                );
                                if (subPattern != undefined)
                                  newPatterns[i] = subPattern;
                                setLessonPatterns(newPatterns);
                              }
                            }}
                            formatGroupLabel={formatGroupLabel}
                            options={defaultGroupedOptions.concat({
                              label: "User Defined",
                              options: userDefinedPatterns.map((p) => ({
                                value: p.name,
                                label: p.name,
                              })),
                            })}
                            styles={customSelectStyles}
                          />
                          <input
                            type="text"
                            value={p.name}
                            style={{
                              marginTop: "5px",
                              marginBottom: "5px",
                            }}
                            placeholder="Pattern name"
                            onChange={(e) => {
                              let newPatterns = [...lessonPatterns];
                              newPatterns[i].name = e.target.value;
                              setLessonPatterns(newPatterns);
                            }}
                          />
                          <button
                            onClick={() => {
                              let newPatterns = [...lessonPatterns];
                              newPatterns.splice(i, 1);
                              setLessonPatterns(newPatterns);
                              setActiveLessonPatternIndex(newPatterns.length);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                      <div
                        className={styles.lesson_pattern}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => {
                          setLessonPatterns([
                            ...lessonPatterns,
                            { name: "", positions: [], mutedStrings: [] },
                          ]);
                          setActiveLessonPatternIndex(lessonPatterns.length);
                        }}
                      >
                        <p>New Pattern</p>
                        <h1>+</h1>
                      </div>
                    </div>
                  </>
                )}
                <div className={styles.controller_selectors}>
                  <button
                    onClick={() => {
                      if (lessonCreatorActive) {
                        console.log({
                          name: lessonName,
                          description: lessonDescription,
                          progression: lessonPatterns,
                          thumbnail: undefined,
                        });
                      } else setLessonCreatorActive(true);
                    }}
                  >
                    Create New Lesson
                  </button>
                  {lessonCreatorActive && (
                    <button onClick={() => setLessonCreatorActive(false)}>
                      Close
                    </button>
                  )}
                  {/* <button onClick={() => pitchInfo.setup()}>
                    Listen for pitch
                  </button> */}
                </div>
                {/* {pitchInfo.pitch} */}
              </div>
            )}
            {activeControllerNavItem == "settings" && (
              <div className="controller-settings">
                <div className={styles.checkbox_container}>
                  <p>Show notes</p>
                  <input
                    id="show_notes"
                    type="checkbox"
                    checked={showNotes}
                    onChange={() => setShowNotes(!showNotes)}
                  />
                </div>
                <div className={styles.checkbox_container}>
                  <p>Lefty (Coming Soon)</p>
                  <input
                    id="show_notes"
                    type="checkbox"
                    checked={lefty}
                    onChange={() => setLefty(!lefty)}
                  />
                </div>
                <p>Highlighted scale</p>
                <div className={styles.controller_selectors}>
                  <Select
                    value={{ value: activeScale, label: activeScale }}
                    onChange={(e: any, f) =>
                      f.action == "select-option" &&
                      e &&
                      e.value &&
                      setActiveScale(e.value)
                    }
                    formatGroupLabel={formatGroupLabel}
                    options={defaultScalesOptions}
                    styles={customSelectStyles}
                  />
                  <button onClick={() => setActiveScale("")}>Clear</button>
                </div>
                <div className={styles.checkbox_container}>
                  <p>Show semitones</p>
                  <input
                    id="show_notes"
                    type="checkbox"
                    checked={activeScaleShowSemitones}
                    onChange={() =>
                      setActiveScaleShowSemitones(!activeScaleShowSemitones)
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {error != "" && <p>{error}</p>}

        <div ref={fretboardRef} className="display">
          <Fretboard
            showNotes={showNotes}
            relativeSemitonePositionIndex={relativeSemitonePositionIndex}
            mutedStrings={activePatternMutedStrings}
            tuning={tuning}
            initial_positions={positions}
            moveable={activePatternMoveable}
            highlightedScale={activeScale}
            lefty={lefty}
            overlaidPatterns={positionOverlays}
            activeScaleShowSemitones={activeScaleShowSemitones}
            shiftOnMove={activePatternShiftOnMove}
            lessonPlayerActive={lessonPlayerActive}
            onPositionAdd={onPositionAdd}
            onPositionHighlight={onPositionHighlight}
            onPositionDelete={onPositionDelete}
            onPositionChange={(newPositions) => {
              if (activeLessonPatternIndex != null) {
                let newPatterns = [...lessonPatterns];
                newPatterns[activeLessonPatternIndex].positions = newPositions;
                setLessonPatterns(newPatterns);
              }
            }}
          />
        </div>
      </div>

      <div
        ref={fretboard2Ref}
        style={{
          height: "323px",
        }}
      ></div>
    </main>
  );
}
