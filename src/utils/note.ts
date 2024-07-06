import { NOTES } from "@/constants/notes";

export const shiftArrayCounterclockwise = (
  arr: any[],
  numTimes: number,
): any[] => {
  if (numTimes == 0) return arr;
  for (let i = 0; i < numTimes; i++) {
    let first = arr.shift();
    arr.push(first);
  }

  return arr;
};

export const getNote = (fret: number, string: number, tuning: string[]) => {
  let noteArr = shiftArrayCounterclockwise(
    NOTES,
    NOTES.indexOf(tuning[5 - string]),
  );
  return noteArr[fret % noteArr.length];
};

export const getSemitoneOffset = (
  fret1: number,
  string1: number,
  fret2: number,
  string2: number,
  tuning: string[],
) => {
  let note1 = getNote(fret1, string1, tuning);
  let note2 = getNote(fret2, string2, tuning);
  return shiftArrayCounterclockwise(NOTES, NOTES.indexOf(note2)).indexOf(note1);
};

export const getNoteSemitoneOffset = (note1: string, note2: string) => {
  return shiftArrayCounterclockwise(NOTES, NOTES.indexOf(note1)).indexOf(note2);
};
