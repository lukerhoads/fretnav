import { GeneralScale, Scale } from "@/types/scale";
import { NOTES } from "./notes";
import { shiftArrayCounterclockwise } from "@/utils/note";

const userDefinedGeneralScales: GeneralScale[] = [
  {
    name: "major (Ionian)",
    notes: [0, 2, 4, 5, 7, 9, 11],
  },
  {
    name: "minor (Aeolian)",
    notes: [0, 2, 3, 5, 7, 8, 10],
  },
  {
    name: "Dorian",
    notes: [0, 2, 3, 5, 7, 9, 10],
  },
  {
    name: "Lydian",
    notes: [0, 2, 4, 6, 7, 9, 11],
  },
  {
    name: "Phrygian",
    notes: [0, 1, 3, 5, 7, 8, 10],
  },
  {
    name: "Mixolydian",
    notes: [0, 2, 4, 5, 7, 9, 10],
  },
  {
    name: "Locrian",
    notes: [0, 1, 3, 5, 6, 8, 10],
  },
];

export const defaultScales: Scale[] = NOTES.map((note, i) => {
  return userDefinedGeneralScales.map((s) => {
    return {
      name: note + " " + s.name,
      notes: s.notes.map((n) => NOTES[(i + n) % 12]) as [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
      ],
    };
  });
}).flat();

export const defaultScalesOptions = [
  {
    label: "Default",
    options: defaultScales.map((s) => ({ value: s.name, label: s.name })),
  },
];
