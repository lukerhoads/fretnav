export type PositionConfig = {
  guitar_string: number;
  fret: number;
  label: string;
  color: string;
  sync_to_note?: boolean;
};

export type Pattern = {
  name: string;
  moveable?: boolean;
  category?: string;
  positions: PositionConfig[];
  mutedStrings?: number[];
  shiftOnMove?: boolean;
};
