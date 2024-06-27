import { colourOptions, colourStyles } from "@/constants/styles";
import styles from "./position.module.css";
import Select from "react-select";

type Props = {
  guitar_string: number;
  fret: number;
  label: string;
  color: string;
  moveable: boolean;
  sync_to_note?: boolean;
  tuning: string[];
  highlighted: boolean;
  onLabelChange: (label: string) => void;
  onColorChange: (color: string) => void;
  onSyncChange: (sync_to_note: boolean) => void;
  onDelete: () => void;
};

const Position = ({
  guitar_string,
  fret,
  label,
  color,
  tuning,
  sync_to_note,
  moveable,
  highlighted,
  onLabelChange,
  onColorChange,
  onSyncChange,
  onDelete,
}: Props) => {
  return (
    <div
      className={styles.position_container}
      style={{
        border: highlighted ? "2px solid black" : "1px solid black",
      }}
    >
      <div className={styles.position_container_top}>
        <div>
          <p>String {tuning[5 - guitar_string]}</p>
          <p>Fret {fret}</p>
        </div>
        <div>
          {moveable && (
            <input
              type="checkbox"
              checked={sync_to_note ? sync_to_note : false}
              onChange={() => onSyncChange(!sync_to_note)}
            />
          )}
          <button onClick={onDelete}>X</button>
        </div>
      </div>

      <div className={styles.position_input}>
        <input
          placeholder="Label"
          value={label}
          onChange={(e) => onLabelChange(e.target.value)}
        />
        <Select
          value={
            /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(color)
              ? colourOptions.find((c) => c.color == color)
              : colourOptions.find((c) => c.value == color)
          }
          options={colourOptions}
          styles={colourStyles}
          onChange={(e: any, f) =>
            f.action == "select-option" &&
            e &&
            e.value &&
            onColorChange(e.color)
          }
        />
      </div>
    </div>
  );
};

export default Position;
