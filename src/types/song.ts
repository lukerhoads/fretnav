import { Pattern } from "./pattern";

// TODO add Sunset by Polyphia, Lemonade by Internet Money

export type Song = {
  name: string;
  description: string;
  bpm: number;
  progression: Pattern[];
  thumbnail?: string;
};
