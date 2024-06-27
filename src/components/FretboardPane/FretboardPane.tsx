"use client";

import { useEffect, useState } from "react";
import Fretboard from "../Fretboard/Fretboard";
import styles from "./fretboardpane.module.css";
import { patterns } from "@/constants/patterns";
import { getNote } from "@/utils/note";
import { Pattern, PositionConfig } from "@/types/pattern";
import { hyphenate } from "@/utils/hyphenate";

type Props = {
  patternName?: string;
  tuning: string[];
};

// Mini pane to insert on blog posts with a Fretboard and "explore more" button
const FretboardPane = ({
  patternName = "",
  tuning = ["E", "A", "D", "G", "B", "E"],
}: Props) => {
  // Get pattern data (obv add user defined patterns when able to)
  const [pattern, setPattern] = useState<Pattern | null>(null);
  const [selectedNoteFret, setSelectedNoteFret] = useState<number | null>(null);
  const [selectedNoteString, setSelectedNoteString] = useState<number | null>(
    null,
  );
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    let p = patterns.find((p) => hyphenate(p.name) == patternName);
    if (p != undefined) setPattern(p);
    else {
    } // find pattern in user defined
  }, []);

  const onPosHighlight = (idx: number, fret: number, string: number) => {
    setSelectedNoteFret(fret);
    setSelectedNoteString(string);
  };

  return (
    <div className={styles.container}>
      {pattern && (
        <div className={styles.pattern_info}>
          <p className={styles.pattern_name}>Pattern: {pattern.name}</p>
          <div className={styles.checkbox_container}>
            <p>Show notes</p>
            <input
              id="show_notes"
              type="checkbox"
              checked={showNotes}
              onChange={() => setShowNotes(!showNotes)}
            />
          </div>
          <a
            className={styles.explore}
            href={`/app?tab=navigator&pattern=${hyphenate(pattern.name)}`}
          >
            <button>Explore</button>
          </a>
        </div>
      )}

      <Fretboard
        tuning={tuning}
        initial_positions={pattern ? pattern.positions : []}
        overlaidPatterns={[]}
        moveable={
          pattern ? (pattern.moveable ? pattern.moveable : false) : false
        }
        lefty={false}
        showNotes={showNotes}
        mutedStrings={
          pattern ? (pattern.mutedStrings ? pattern.mutedStrings : []) : []
        }
        resizeToHighlight={true}
        onPositionHighlight={onPosHighlight}
      />

      {selectedNoteFret && selectedNoteString && (
        <div className={styles.note_info}>
          <p>String: {selectedNoteString + 1}</p>
          <p>Fret: {selectedNoteFret}</p>
          <p>Note: {getNote(selectedNoteFret, selectedNoteString, tuning)}</p>
        </div>
      )}
    </div>
  );
};

export default FretboardPane;
