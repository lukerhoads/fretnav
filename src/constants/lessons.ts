import { Lesson } from "@/types/lesson";

export const lessons: Lesson[] = [
  {
    name: "as",
    description: "",
    progression: [
      {
        name: "Major (E Form)",
        category: "Barre Chords",
        moveable: true,
        positions: [
          {
            guitar_string: 3,
            fret: 7,
            label: "1",
            color: "#58B4EE",
          },
          {
            guitar_string: 4,
            fret: 7,
            label: "5",
            color: "#FA1A0D",
          },
          {
            guitar_string: 2,
            fret: 6,
            label: "3",
            color: "#FD8D04",
          },
          {
            guitar_string: 0,
            fret: 5,
            label: "1",
            color: "#58B4EE",
          },
          {
            guitar_string: 1,
            fret: 5,
            label: "5",
            color: "#FA1A0D",
          },
          {
            guitar_string: 5,
            fret: 5,
            label: "1",
            color: "#58B4EE",
          },
        ],
      },
      {
        name: "Major (A Form)",
        positions: [
          {
            guitar_string: 0,
            fret: 5,
            label: "5",
            color: "#FA1A0D",
          },
          {
            guitar_string: 1,
            fret: 7,
            label: "3",
            color: "#FD8D04",
          },
          {
            guitar_string: 2,
            fret: 7,
            label: "1",
            color: "#58B4EE",
          },
          {
            guitar_string: 3,
            fret: 7,
            label: "5",
            color: "#FA1A0D",
          },
          {
            guitar_string: 4,
            fret: 5,
            label: "1",
            color: "#58B4EE",
          },
          {
            guitar_string: 5,
            fret: 5,
            label: "5",
            color: "#FA1A0D",
          },
        ],
        category: "Barre Chords",
        moveable: true,
      },
    ],
  },
];
