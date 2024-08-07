import { Pattern } from "../types/pattern";

export const pattern_categories = [
  "Open Chords",
  "Open Chord Variations",
  "Barre Chords",
  "Octaves",
  "Pentatonics",
  "Triads",
  "Harmonization",
  "Moveable",
  "Arpeggio",
  "Shell Chords",
  "Test",
];

export const patterns: Pattern[] = [
  {
    name: "Minor 7 Flat 5 (Root 2nd String)",
    positions: [
      {
        guitar_string: 1,
        fret: 3,
        label: "b3",
        color: "#0E8BC4",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "b7",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "b5",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    "name": "Diminished 7 (Root 2nd String)",
    "positions": [
        {
            "guitar_string": 2,
            "fret": 7,
            "label": "bb7",
            "color": "#ABCE30"
        },
        {
            "guitar_string": 4,
            "fret": 8,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 3,
            "fret": 9,
            "label": "b5",
            "color": "#FA1A0D"
        },
        {
            "guitar_string": 1,
            "fret": 9,
            "label": "b3",
            "color": "#FD8D04"
        }
    ],
    "category": "Moveable",
    "moveable": true,
    "shiftOnMove": true
},
{
  "name": "Diminished 7th (Root 1st String)",
  "positions": [
      {
          "guitar_string": 5,
          "fret": 5,
          "label": "1",
          "color": "#58B4EE"
      },
      {
          "guitar_string": 1,
          "fret": 4,
          "label": "b5",
          "color": "#FA1A0D"
      },
      {
          "guitar_string": 3,
          "fret": 4,
          "label": "bb7",
          "color": "#ABCE30"
      },
      {
          "guitar_string": 2,
          "fret": 5,
          "label": "b3",
          "color": "#FD8D04"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
  {
    "name": "Minor 9th (Root 2nd String)",
    "positions": [
        {
            "guitar_string": 4,
            "fret": 5,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 2,
            "fret": 5,
            "label": "b7",
            "color": "#ABCE30"
        },
        {
            "guitar_string": 1,
            "fret": 5,
            "label": "9",
            "color": "#F7ED37"
        },
        {
            "guitar_string": 3,
            "fret": 3,
            "label": "b3",
            "color": "#FD8D04"
        }
    ],
    "category": "Moveable",
    "moveable": true,
    "shiftOnMove": true
},
  {
    "name": "Dominant 9 Chord (Root 2nd String)",
    "positions": [
        {
            "guitar_string": 4,
            "fret": 5,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 3,
            "fret": 4,
            "label": "3",
            "color": "#FD8D04"
        },
        {
            "guitar_string": 2,
            "fret": 5,
            "label": "b7",
            "color": "#ABCE30"
        },
        {
            "guitar_string": 1,
            "fret": 5,
            "label": "9",
            "color": "#F7ED37"
        }
    ],
    "category": "Moveable",
    "moveable": true,
    "shiftOnMove": true
},
  {
    "name": "Major 7th (Root 4th String)",
    "positions": [
        {
            "guitar_string": 0,
            "fret": 9,
            "label": "7",
            "color": "#ABCE30"
        },
        {
            "guitar_string": 1,
            "fret": 7,
            "label": "3",
            "color": "#FD8D04"
        },
        {
            "guitar_string": 2,
            "fret": 7,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 3,
            "fret": 7,
            "label": "5",
            "color": "#FA1A0D"
        }
    ],
    "category": "Moveable",
    "moveable": true,
    "shiftOnMove": true
},
  {
    name: "Minor 7 Flat 5 (Root 1st String)",
    positions: [
      {
        guitar_string: 5,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 1,
        fret: 2,
        label: "b5",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 Flat 5 (Root 3rd String)",
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 4,
        label: "b5",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 4,
        label: "b7",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 4,
        label: "b3",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
  },
  {
    name: "Dominant 7 (Root 1st String)",
    positions: [
      {
        guitar_string: 5,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "3",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 6,
        label: "5",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Dominant 7 (Root 2nd String)",
    positions: [
      {
        guitar_string: 4,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 8,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 2,
        fret: 6,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 8,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 6,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 (Root 3rd String)",
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 4,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 0,
        fret: 4,
        label: "b3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Dominant 7 (Root 3rd String)",
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 4,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 5,
        label: "3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 7 (Root 3rd String)",
    positions: [
      {
        guitar_string: 3,
        fret: 5,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 7,
        label: "7",
        color: "#ABCE30",
      },
      {
        guitar_string: 0,
        fret: 7,
        label: "3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 7 (Root 2nd String)",
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 4,
        label: "7",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 5,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 (Root 2nd String)",
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 4,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 (Root 1st String)",
    positions: [
      {
        guitar_string: 5,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "G minor",
    positions: [
      {
        guitar_string: 4,
        fret: 1,
        label: "A#",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 3,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "D",
        color: "black",
      },
    ],
    category: "Open Chords",
  },
  {
    name: "Minor Arpeggio (1-2nps form 1)",
    positions: [
      {
        guitar_string: 5,
        fret: 8,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 10,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 12,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 13,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 15,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 11,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 13,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 16,
        label: "D#",
        color: "black",
      },
    ],
    category: "Arpeggio",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor Arpeggio (1-2nps form 2)",
    positions: [
      {
        guitar_string: 5,
        fret: 8,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 6,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 10,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 8,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 12,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 13,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 11,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 15,
        label: "G",
        color: "black",
      },
    ],
    category: "Arpeggio",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major Arpeggio (1-2nps form 1)",
    positions: [
      {
        guitar_string: 5,
        fret: 8,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 12,
        label: "E",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 10,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 14,
        label: "E",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 12,
        label: "G",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 13,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 17,
        label: "E",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 15,
        label: "G",
        color: "black",
      },
    ],
    category: "Arpeggio",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major Arpeggio (1-2nps form 2)",
    positions: [
      {
        guitar_string: 5,
        fret: 7,
        label: "B",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 6,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 9,
        label: "F#",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 9,
        label: "B",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 8,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 11,
        label: "F#",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 12,
        label: "B",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 11,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 14,
        label: "F#",
        color: "black",
      },
    ],
    category: "Arpeggio",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 7 (Root 1st String)",
    positions: [
      {
        guitar_string: 5,
        fret: 5,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "7",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 6,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 1,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 7 / 7",
    positions: [
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
        color: "#0E8BC4",
      },
      {
        guitar_string: 2,
        fret: 6,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "7",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 7 Drop 5",
    positions: [
      {
        guitar_string: 5,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 4,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 4,
        label: "7",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 Drop 5",
    positions: [
      {
        guitar_string: 5,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "b7",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "b3",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 7 / b7",
    positions: [
      {
        guitar_string: 0,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "5",
        color: "#0E8BC4",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "b7",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 9th (Moveable)",
    positions: [
      {
        guitar_string: 5,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 7,
        label: "7",
        color: "#FD8D04",
      },
      {
        guitar_string: 4,
        fret: 5,
        label: "3",
        color: "#ABCE30",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "9",
        color: "#FA1A0D",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 9th (Moveable)",
    positions: [
      {
        guitar_string: 4,
        fret: 8,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 8,
        label: "b7",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 8,
        label: "9",
        color: "#0E8BC4",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 9th",
    positions: [
      {
        guitar_string: 5,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 4,
        label: "p5",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "b3",
        color: "#ABCE30",
      },
      {
        guitar_string: 1,
        fret: 2,
        label: "p5",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 4,
        label: "9",
        color: "#FA1A0D",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "m7",
        color: "#F7ED37",
      },
    ],
    category: "Barre Chords",
    moveable: true,
  },
  {
    name: "Major Scale Harmonization",
    positions: [
      {
        guitar_string: 5,
        fret: 8,
        label: "C",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 8,
        label: "F",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "G",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 5,
        label: "A",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 5,
        label: "D",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 7,
        label: "E",
        color: "#ABCE30",
      },
      {
        guitar_string: 5,
        fret: 7,
        label: "B",
        color: "#FA1A0D",
      },
    ],
    category: "Harmonization",
    moveable: true,
  },
  {
    name: "Minor Scale Harmonization",
    positions: [
      {
        guitar_string: 5,
        fret: 8,
        label: "C",
        color: "#ABCE30",
      },
      {
        guitar_string: 5,
        fret: 10,
        label: "D",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 11,
        label: "D#",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 8,
        label: "F",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 11,
        label: "G#",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 13,
        label: "A#",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "G",
        color: "#ABCE30",
      },
    ],
    category: "Harmonization",
    moveable: true,
  },
  {
    name: "E",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 2,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "A",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 1,
        fret: 2,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "1",
        color: "black",
      },
    ],
  },
  {
    name: "C",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "Major 6th Drop 5",
    positions: [
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 7,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "6",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 8,
        label: "1",
        color: "#58B4EE",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    "name": "Diminished (D Form)",
    "positions": [
        {
            "guitar_string": 3,
            "fret": 5,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 2,
            "fret": 6,
            "label": "b5",
            "color": "#FA1A0D"
        },
        {
            "guitar_string": 1,
            "fret": 8,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 0,
            "fret": 6,
            "label": "b3",
            "color": "#FD8D04"
        }
    ],
    "category": "Barre Chords",
    "moveable": true,
    mutedStrings: [5, 6]
},
  {
    name: "Minor 6th Drop 5",
    positions: [
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "6",
        color: "#ABCE30",
      },
      {
        guitar_string: 4,
        fret: 8,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "b3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Minor 6th",
    positions: [
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 5,
        label: "6",
        color: "#ABCE30",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "b3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "Major 6th",
    positions: [
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 5,
        label: "6",
        color: "#ABCE30",
      },
      {
        guitar_string: 3,
        fret: 7,
        label: "3",
        color: "#FD8D04",
      },
    ],
    category: "Moveable",
    moveable: true,
    shiftOnMove: true,
  },
  {
    name: "G",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 4,
        fret: 2,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 3,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "D",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 0,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "E minor",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 3,
        fret: 2,
        label: "E",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "B",
        color: "black",
      },
    ],
  },
  {
    name: "A minor",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 1,
        fret: 1,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "E",
        color: "black",
      },
    ],
  },
  {
    name: "D minor",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "F",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "D",
        color: "black",
      },
    ],
  },
  {
    name: "C minor",
    positions: [
      {
        guitar_string: 1,
        fret: 1,
        label: "C",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "D#",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "C",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [1, 6],
  },
  {
    name: "Major (E Form)",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
    ],
  },
  {
    name: "Minor (E Form)",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 1,
        label: "b3",
        color: "#FD8D04",
      },
    ],
  },
  {
    name: "Major (C Form)",
    positions: [
      {
        guitar_string: 1,
        fret: 5,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 6,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 4,
        fret: 7,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 0,
        fret: 4,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 4,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 4,
        label: "3",
        color: "#FD8D04",
      },
    ],
    category: "Barre Chords",
    moveable: true,
  },
  {
    name: "Major (A Form)",
    positions: [
      {
        guitar_string: 0,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 5,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Barre Chords",
    moveable: true,
  },
  {
    name: "Minor 7th",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 1,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "b7",
        color: "#ABCE30",
      },
    ],
  },
  {
    name: "Major 7th",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "7",
        color: "#ABCE30",
      },
    ],
  },
  {
    name: "Dominant 7th",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "b7",
        color: "#ABCE30",
      },
    ],
  },
  {
    "name": "Dominant 7th / 5",
    "positions": [
        {
            "guitar_string": 3,
            "fret": 5,
            "label": "1",
            "color": "#58B4EE"
        },
        {
            "guitar_string": 4,
            "fret": 5,
            "label": "5",
            "color": "#FA1A0D"
        },
        {
            "guitar_string": 2,
            "fret": 4,
            "label": "3",
            "color": "#FD8D04"
        },
        {
            "guitar_string": 1,
            "fret": 6,
            "label": "b7",
            "color": "#ABCE30"
        }
    ],
    "category": "Moveable",
    "moveable": true,
    "shiftOnMove": true
},
{
  "name": "Aadd9",
  "positions": [
      {
          "guitar_string": 2,
          "fret": 6,
          "label": "C#",
          "color": "black"
      },
      {
          "guitar_string": 3,
          "fret": 7,
          "label": "A",
          "color": "black"
      }
  ],
  "category": "Open Chords",
  mutedStrings: [5, 6]
},
{
  "name": "E (Strings 2-5)",
  "positions": [
      {
          "guitar_string": 2,
          "fret": 4,
          "label": "B",
          "color": "black"
      },
      {
          "guitar_string": 1,
          "fret": 5,
          "label": "E",
          "color": "black"
      },
      {
          "guitar_string": 3,
          "fret": 6,
          "label": "G#",
          "color": "black"
      }
  ],
  "category": "Open Chords",
  "mutedStrings": [
      5,
      1
  ]
},
{
  "name": "A (Strings 2-5)",
  "positions": [
      {
          "guitar_string": 1,
          "fret": 5,
          "label": "E",
          "color": "black"
      },
      {
          "guitar_string": 2,
          "fret": 6,
          "label": "C#",
          "color": "black"
      },
      {
          "guitar_string": 3,
          "fret": 7,
          "label": "A",
          "color": "black"
      }
  ],
  "category": "Open Chords",
  mutedStrings: [1, 6],
},
{
  "name": "Minor 7 (Root 6th String)",
  "positions": [
      {
          "guitar_string": 3,
          "fret": 3,
          "label": "b7",
          "color": "#ABCE30"
      },
      {
          "guitar_string": 0,
          "fret": 3,
          "label": "1",
          "color": "#58B4EE"
      },
      {
          "guitar_string": 1,
          "fret": 3,
          "label": "5",
          "color": "#FA1A0D"
      },
      {
          "guitar_string": 2,
          "fret": 3,
          "label": "b3",
          "color": "#FD8D04"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
{
  "name": "C6add9 (Rootless)",
  "positions": [
      {
          "guitar_string": 2,
          "fret": 2,
          "label": "6",
          "color": "#ABCE30"
      },
      {
          "guitar_string": 3,
          "fret": 2,
          "label": "3",
          "color": "#FD8D04"
      },
      {
          "guitar_string": 1,
          "fret": 3,
          "label": "9",
          "color": "#F7ED37"
      },
      {
          "guitar_string": 0,
          "fret": 3,
          "label": "5",
          "color": "#FA1A0D"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
{
  "name": "Dominant 7th (Root 2nd and 5th Strings)",
  "positions": [
      {
          "guitar_string": 1,
          "fret": 3,
          "label": "1",
          "color": "#58B4EE"
      },
      {
          "guitar_string": 3,
          "fret": 4,
          "label": "3",
          "color": "#FD8D04"
      },
      {
          "guitar_string": 2,
          "fret": 5,
          "label": "b7",
          "color": "#ABCE30"
      },
      {
          "guitar_string": 4,
          "fret": 5,
          "label": "1",
          "color": "#58B4EE"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
{
  "name": "Major 7 (Root 3rd String) Form 2",
  "positions": [
      {
          "guitar_string": 3,
          "fret": 7,
          "label": "1",
          "color": "#58B4EE"
      },
      {
          "guitar_string": 2,
          "fret": 6,
          "label": "3",
          "color": "#FD8D04"
      },
      {
          "guitar_string": 1,
          "fret": 5,
          "label": "5",
          "color": "#FA1A0D"
      },
      {
          "guitar_string": 0,
          "fret": 4,
          "label": "7",
          "color": "#ABCE30"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
{
  "name": "Dominant 7 / 5 (Root 1st String)",
  "positions": [
      {
          "guitar_string": 5,
          "fret": 8,
          "label": "5",
          "color": "#FA1A0D"
      },
      {
          "guitar_string": 3,
          "fret": 7,
          "label": "3",
          "color": "#FD8D04"
      },
      {
          "guitar_string": 2,
          "fret": 8,
          "label": "b7",
          "color": "#ABCE30"
      },
      {
          "guitar_string": 1,
          "fret": 6,
          "label": "1",
          "color": "#58B4EE"
      }
  ],
  "category": "Moveable",
  "moveable": true,
  "shiftOnMove": true
},
  {
    name: "Sus4",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "4",
        color: "#0E8BC4",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
    ],
  },
  {
    name: "Power chord",
    category: "Barre Chords",
    moveable: true,
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 1,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
    ],
  },
  {
    name: "A octaves",
    category: "Octaves",
    positions: [
      {
        guitar_string: 2,
        fret: 2,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 5,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 5,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 7,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 10,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 12,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 14,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 17,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 17,
        label: "A",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 19,
        label: "A",
        color: "black",
      },
    ],
  },
  // {
  //   name: "A minor (1st position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 0,
  //       fret: 5,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 5,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 8,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 7,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 5,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 5,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 5,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 7,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 7,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 8,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 8,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 5,
  //       label: "E",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A minor (2nd position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 3,
  //       fret: 7,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 10,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 10,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 7,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 10,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 10,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 8,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 8,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 9,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 7,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 10,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 8,
  //       label: "C",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A minor (3rd position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 1,
  //       fret: 10,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 9,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 12,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 13,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 12,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 12,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 10,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 10,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 10,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 10,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A minor (4th position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 4,
  //       fret: 12,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 15,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 15,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 14,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 14,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 12,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 12,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 15,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 13,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 15,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A minor (5th position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 2,
  //       fret: 14,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 17,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 17,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 14,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 17,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 17,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 15,
  //       label: "C",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 15,
  //       label: "G",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 17,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 17,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 15,
  //       label: "D",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 15,
  //       label: "G",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A major (1st position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 5,
  //       fret: 5,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 7,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 7,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 7,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 4,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 4,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 5,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 7,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 5,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 7,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 4,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 6,
  //       label: "C#",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A major (2nd position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 3,
  //       fret: 7,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 7,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 7,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 9,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 9,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 9,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 10,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 7,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 9,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 6,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 9,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 7,
  //       label: "B",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A major (3rd position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 4,
  //       fret: 12,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 9,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 9,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 10,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 12,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 11,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 11,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 9,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 9,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 9,
  //       label: "C#",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A major (4th position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 4,
  //       fret: 12,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 14,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 14,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 14,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 14,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 11,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 11,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 12,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 14,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 14,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 12,
  //       label: "E",
  //       color: "black",
  //     },
  //   ],
  // },
  // {
  //   name: "A major (5th position)",
  //   category: "Pentatonics",
  //   positions: [
  //     {
  //       guitar_string: 2,
  //       fret: 14,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 2,
  //       fret: 16,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 16,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 16,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 4,
  //       fret: 14,
  //       label: "B",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 3,
  //       fret: 14,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 17,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 5,
  //       fret: 14,
  //       label: "F#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 17,
  //       label: "A",
  //       color: "#ff0000",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 17,
  //       label: "E",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 1,
  //       fret: 14,
  //       label: "C#",
  //       color: "black",
  //     },
  //     {
  //       guitar_string: 0,
  //       fret: 14,
  //       label: "F#",
  //       color: "black",
  //     },
  //   ],
  // },
  {
    name: "Major Triad Cheetsheet",
    category: "Triads",
    moveable: true,
    positions: [
      {
        guitar_string: 0,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 2,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 4,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 4,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 0,
        fret: 7,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 1,
        fret: 8,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 3,
        fret: 9,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 10,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 13,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 15,
        label: "3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 15,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 15,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 13,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 13,
        label: "5",
        color: "#FA1A0D",
      },
    ],
  },
  {
    name: "Minor Triad Cheetsheet",
    category: "Triads",
    moveable: true,
    positions: [
      {
        guitar_string: 0,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 2,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 3,
        fret: 4,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 4,
        fret: 4,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 5,
        fret: 2,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 1,
        fret: 8,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 7,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 10,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 10,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 0,
        fret: 13,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 2,
        fret: 15,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 15,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 13,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 13,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 6,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 3,
        fret: 8,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 1,
        fret: 14,
        label: "b3",
        color: "#FD8D04",
      },
    ],
  },
  {
    name: "A7",
    category: "Open Chords",
    mutedStrings: [6],
    positions: [
      {
        guitar_string: 1,
        fret: 2,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "2",
        color: "black",
      },
    ],
  },
  {
    name: "B7",
    category: "Open Chords",
    mutedStrings: [6],
    positions: [
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 2,
        label: "4",
        color: "black",
      },
    ],
  },
  {
    name: "C7",
    category: "Open Chords",
    mutedStrings: [6],
    positions: [
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 3,
        label: "4",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "D7",
    category: "Open Chords",
    mutedStrings: [5, 6],
    positions: [
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 2,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "E7",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 2,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "2",
        color: "black",
      },
    ],
  },
  {
    name: "F7",
    category: "Open Chords",
    mutedStrings: [5, 6],
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
    ],
  },
  {
    name: "G7",
    category: "Open Chords",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 5,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
  },
  {
    name: "C6",
    positions: [
      {
        guitar_string: 4,
        fret: 3,
        label: "4",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [6],
  },
  {
    name: "Csus4",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 3,
        label: "4",
        color: "black",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [6],
  },
  {
    name: "Cdim",
    positions: [
      {
        guitar_string: 0,
        fret: 2,
        label: "4",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 3,
        fret: 1,
        label: "1",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [6, 5],
  },
  {
    name: "Dm",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "3",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "Dm7",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 1,
        label: "1",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "D6",
    positions: [
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 2,
        label: "1",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "Dm6",
    positions: [
      {
        guitar_string: 2,
        fret: 2,
        label: "2",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "Ddim",
    positions: [
      {
        guitar_string: 0,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 2,
        fret: 1,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "4",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "Dsus4",
    positions: [
      {
        guitar_string: 2,
        fret: 2,
        label: "1",
        color: "black",
      },
      {
        guitar_string: 1,
        fret: 3,
        label: "3",
        color: "black",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "4",
        color: "black",
      },
    ],
    category: "Open Chords",
    mutedStrings: [5, 6],
  },
  {
    name: "Major (D Form)",
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 0,
        fret: 5,
        label: "3",
        color: "#FD8D04",
      },
    ],
    category: "Barre Chords",
    moveable: true,
    mutedStrings: [5, 6],
  },
  {
    name: "Minor (A Form)",
    positions: [
      {
        guitar_string: 2,
        fret: 5,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 3,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 4,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 0,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 4,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 5,
        fret: 3,
        label: "5",
        color: "#FA1A0D",
      },
    ],
    category: "Barre Chords",
    moveable: true,
  },
  {
    name: "Minor (D Form)",
    positions: [
      {
        guitar_string: 3,
        fret: 3,
        label: "1",
        color: "#58B4EE",
      },
      {
        guitar_string: 0,
        fret: 4,
        label: "b3",
        color: "#FD8D04",
      },
      {
        guitar_string: 2,
        fret: 5,
        label: "5",
        color: "#FA1A0D",
      },
      {
        guitar_string: 1,
        fret: 6,
        label: "1",
        color: "#58B4EE",
      },
    ],
    category: "Barre Chords",
    moveable: true,
    mutedStrings: [5, 6],
  },
];

export const defaultGroupedOptions = pattern_categories.map((c) => ({
  label: c,
  options: patterns
    .filter((p) => p.category === c)
    .map((p) => ({ value: p.name, label: p.name }))
    .sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    }),
}));

export module Patterns {
  export const data = patterns;
}
