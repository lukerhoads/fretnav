import { useState } from "react";
import styles from "./timeline.module.css";
import { Pattern } from "@/types/pattern";

type Props = {
  bpm: number;
  measures: Pattern[];
  setActiveMeasure: (idx: number) => void;
};

const Timeline = ({ bpm, measures, setActiveMeasure }: Props) => {
  const [numCols, setNumCols] = useState(50);
  const [timelinePos, setTimelinePos] = useState(0);
  const [scale, setScale] = useState(1);

  return (
    <div className={styles.timeline}>
      <div
        className={styles.timeline_bg}
        style={{
          gridTemplateColumns: `repeat(${numCols}, auto);`,
          gridTemplateRows: "1",
        }}
      >
        {Array.from(Array(numCols)).map((_, i) => (
          <div
            style={{
              borderLeft: "1px solid black",
              height: "100%",
              width: "100%",
              minWidth: "50px",
              gridColumn: `${i} / span 1`,
              gridRow: "1",
            }}
            key={i}
          />
        ))}
      </div>
      <div className={styles.timeline_marker} style={{}} />
      <div className={styles.timeline_resize}>
        <button onClick={() => setScale(scale + 0.1)}>+</button>
        <button onClick={() => setScale(scale - 0.1)}>-</button>
      </div>
    </div>
  );
};

export default Timeline;
