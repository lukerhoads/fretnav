import { PositionConfig } from "./pattern";

export type PositionAction = {
  type: "ADD" | "DELETE";
  fret: number;
  gt_string: number;
};

export type DragAction = {
  newPositions: PositionConfig[];
  oldPositions: PositionConfig[];
};

export type Action = PositionAction | DragAction;
