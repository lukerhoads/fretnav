import { NOTES } from "@/constants/notes"

const shiftArrayCounterclockwise = (arr: any[], numTimes: number): any[] => {
    if (numTimes == 0) return arr
    for (let i = 0; i < numTimes; i++) {
        let first = arr.shift()
        arr.push(first)
    }

    return arr
}

export const getNote = (fret: number, string: number, tuning: string[]) => {
    let noteArr = shiftArrayCounterclockwise(NOTES, NOTES.indexOf(tuning[5 - string]))
    return noteArr[fret % noteArr.length]
}