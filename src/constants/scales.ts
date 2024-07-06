import { GeneralScale, Scale } from "@/types/scale";
import { NOTES } from "./notes";
import { shiftArrayCounterclockwise } from "@/utils/note";

const userDefinedGeneralScales: GeneralScale[] = [
  {
    name: "major",
    notes: [0, 2, 4, 5, 7, 9, 11],
  },
];

export const defaultScales: Scale[] = userDefinedGeneralScales
  .map((s) => {
    let result: Scale[] = [];
    NOTES.forEach((note, i) => {
      let shifted = shiftArrayCounterclockwise(NOTES, i);
      result.push({
        name: note + " " + s.name,
        notes: s.notes.map((n) => shifted[n]) as [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
        ],
      });
    });
    return result;
  })
  .flat();

export const defaultScalesOptions = [
  {
    label: "Default",
    options: defaultScales.map((s) => ({ value: s.name, label: s.name })),
  },
];
