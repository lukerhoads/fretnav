export type ResizeConfig = {
    starting_fret: number,
    ending_fret: number,
    starting_string: number,
    ending_string: number
}

export const DEFAULT_RESIZE_CONFIG = {
    starting_fret: 0,
    starting_string: 0,
    ending_fret: 20,
    ending_string: 6,
}