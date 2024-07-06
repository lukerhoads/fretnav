import { Pattern } from "./pattern";

export type Lesson = {
  name: string;
  description: string;
  progression: Pattern[];
  thumbnail?: string;
};
