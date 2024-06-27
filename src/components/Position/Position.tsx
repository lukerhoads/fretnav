import { colourOptions, colourStyles } from "@/constants/styles";
import styles from "./position.module.css";
import Select from "react-select";

type Props = {
  guitar_string: number;
  fret: number;
  label: string;
  color: string;
  moveable: boolean;
  show_relative_semitones?: boolean;
  tuning: string[];
  highlighted: boolean;
  onLabelChange: (label: string) => void;
  onColorChange: (color: string) => void;
  onRelativeSemitoneChange: (sync_to_note: boolean) => void;
  onDelete: () => void;
};

const Position = ({
  guitar_string,
  fret,
  label,
  color,
  tuning,
  show_relative_semitones,
  moveable,
  highlighted,
  onLabelChange,
  onColorChange,
  onRelativeSemitoneChange,
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
          <input
            type="checkbox"
            checked={show_relative_semitones ? show_relative_semitones : false}
            onChange={() => onRelativeSemitoneChange(!show_relative_semitones)}
          />
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
