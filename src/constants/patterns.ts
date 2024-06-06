import { Pattern } from "@/components/Position/Position";

export const pattern_categories = ["Open Chords", "Barre Chords", "Octaves", "Pentatonics", "Triads", "Test"]

export const patterns: Pattern[] = [
    {
        name: "Open E",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 2,
                "fret": 1,
                "label": "1",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "2",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 2,
                "label": "3",
                "color": "black"
            }
        ]
    },
    {
        name: "Open A",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 1,
                "fret": 2,
                "label": "3",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "2",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "1",
                "color": "black"
            }
        ]
    },
    {
        name: "Open C",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "1",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "2",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "3",
                "color": "black"
            }
        ]
    },
    {
        name: "Open G",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 4,
                "fret": 2,
                "label": "1",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 3,
                "label": "2",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 3,
                "label": "3",
                "color": "black"
            }
        ]
    },
    {
        name: "Open D",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 0,
                "fret": 2,
                "label": "2",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "1",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 3,
                "label": "3",
                "color": "black"
            }
        ]
    }, 
    {
        name: "Open E minor",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 2,
                "label": "B",
                "color": "black"
            }
        ]
    },
    {
        name: "Open A minor",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "E",
                "color": "black"
            }
        ]
    },
    {
        name: "Open D minor",
        category: "Open Chords",
        positions: [
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "F",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 3,
                "label": "D",
                "color": "black"
            }
        ]
    },
    {
        name: "Barre E major",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 3,
                "fret": 3,
                "label": "F",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "F",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "F",
                "color": "black"
            }
        ]
    },
    {
        name: "A octaves",
        category: "Octaves",
        positions: [
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 5,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 5,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 7,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 10,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 12,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 14,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 17,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 17,
                "label": "A",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 19,
                "label": "A",
                "color": "black"
            }
        ]
    },
    {
        name: "A minor (1st position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 0,
                "fret": 5,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 5,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 8,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 7,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 4,
                "fret": 5,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 5,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 5,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 7,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 7,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 8,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 8,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 5,
                "label": "E",
                "color": "black"
            }
        ]
    },
    {
        name: "A minor (2nd position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 3,
                "fret": 7,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 3,
                "fret": 10,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 10,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 7,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 10,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 0,
                "fret": 10,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 8,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 8,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 9,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 7,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 10,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 8,
                "label": "C",
                "color": "black"
            }
        ]
    },
    {
        name: "A minor (3rd position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 1,
                "fret": 10,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 2,
                "fret": 9,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 12,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 13,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 12,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 3,
                "fret": 12,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 12,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 10,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 10,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 10,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 10,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 12,
                "label": "E",
                "color": "black"
            }
        ]
    },
    {
        name: "A minor (4th position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 4,
                "fret": 12,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 4,
                "fret": 15,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 15,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 12,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 14,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 3,
                "fret": 14,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 12,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 12,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 15,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 13,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 15,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 12,
                "label": "E",
                "color": "black"
            }
        ]
    },
    {
        name: "A minor (5th position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 2,
                "fret": 14,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 2,
                "fret": 17,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 17,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 14,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 17,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 4,
                "fret": 17,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 15,
                "label": "C",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 15,
                "label": "G",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 17,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 17,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 15,
                "label": "D",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 15,
                "label": "G",
                "color": "black"
            }
        ]
    },
    {
        name: "A major (1st position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 5,
                "fret": 5,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 7,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 7,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 4,
                "fret": 7,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 4,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 4,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 5,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 0,
                "fret": 7,
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
                "guitar_string": 1,
                "fret": 7,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 4,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 6,
                "label": "C#",
                "color": "black"
            }
        ]
    },
    {
        name: "A major (2nd position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 3,
                "fret": 7,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 4,
                "fret": 7,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 7,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 9,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 9,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 9,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 10,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 7,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 9,
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
                "guitar_string": 0,
                "fret": 9,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 7,
                "label": "B",
                "color": "black"
            }
        ]
    },
    {
        name: "A major (3rd position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 4,
                "fret": 12,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 12,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 9,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 9,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 10,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 12,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 11,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 11,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 9,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 9,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 12,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 9,
                "label": "C#",
                "color": "black"
            }
        ]
    },
    {
        name: "A major (4th position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 4,
                "fret": 12,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 12,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 14,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 14,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 14,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 3,
                "fret": 14,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 11,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 11,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 12,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 14,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 14,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 12,
                "label": "E",
                "color": "black"
            }
        ]
    },
    {
        name: "A major (5th position)",
        category: "Pentatonics",
        positions: [
            {
                "guitar_string": 2,
                "fret": 14,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 2,
                "fret": 16,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 16,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 16,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 4,
                "fret": 14,
                "label": "B",
                "color": "black"
            },
            {
                "guitar_string": 3,
                "fret": 14,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 5,
                "fret": 17,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 5,
                "fret": 14,
                "label": "F#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 17,
                "label": "A",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 17,
                "label": "E",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 14,
                "label": "C#",
                "color": "black"
            },
            {
                "guitar_string": 0,
                "fret": 14,
                "label": "F#",
                "color": "black"
            }
        ]
    },
    {
        name: "Root Major Triad - Strings 1, 2, 3",
        category: "Triads",
        moveable: true,
        positions: [
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "p5",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 3,
                "label": "R",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 3,
                "label": "m3",
                "color": "black"
            }
        ]
    },
    {
        name: "1st Inv Major Triad - Strings 1, 2, 3",
        category: "Triads",
        moveable: true,
        positions: [
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "R",
                "color": "#ff0000"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "p5",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "m3",
                "color": "black"
            }
        ]
    },
    {
        name: "2nd Inv Major Triad - Strings 1, 2, 3",
        category: "Triads",
        moveable: true,
        positions: [
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "m3",
                "color": "black"
            },
            {
                "guitar_string": 2,
                "fret": 1,
                "label": "p5",
                "color": "black"
            },
            {
                "guitar_string": 1,
                "fret": 2,
                "label": "R",
                "color": "#ff0000"
            }
        ]
    }
]

export const defaultGroupedOptions = pattern_categories.map(c => ({ label: c, options: patterns.filter(p => p.category == c).map(p => ({ value: p.name, label: p.name })) }))