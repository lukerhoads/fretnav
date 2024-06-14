"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patterns = exports.defaultGroupedOptions = exports.patterns = exports.pattern_categories = void 0;
exports.pattern_categories = ["Open Chords", "Open Chord Variations", "Barre Chords", "Octaves", "Pentatonics", "Triads", "Test"];
exports.patterns = [
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
        name: "E major",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 3,
                "fret": 3,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            }
        ]
    },
    {
        name: "E minor",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 3,
                "fret": 3,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 1,
                "label": "b3",
                "color": "#FD8D04"
            }
        ]
    },
    {
        name: "E minor 7th",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 1,
                "label": "b3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 3,
                "fret": 1,
                "label": "b7",
                "color": "#ABCE30"
            }
        ]
    },
    {
        name: "E major 7th",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 3,
                "fret": 2,
                "label": "7",
                "color": "#ABCE30"
            }
        ]
    },
    {
        name: "E dominant 7th",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 3,
                "fret": 1,
                "label": "b7",
                "color": "#ABCE30"
            }
        ]
    },
    {
        name: "Esus4",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 3,
                "label": "4",
                "color": "#0E8BC4"
            },
            {
                "guitar_string": 3,
                "fret": 3,
                "label": "1",
                "color": "#58B4EE"
            }
        ]
    },
    {
        name: "E power chord",
        category: "Barre Chords",
        moveable: true,
        positions: [
            {
                "guitar_string": 4,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 1,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 3,
                "fret": 3,
                "label": "1",
                "color": "#58B4EE"
            }
        ]
    },
    {
        name: "D major",
        category: "Barre Chords",
        moveable: true,
        mutedStrings: [5, 6],
        positions: [
            {
                "guitar_string": 0,
                "fret": 3,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 1,
                "fret": 4,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 3,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 3,
                "fret": 1,
                "label": "1",
                "color": "#58B4EE",
                "sync_to_note": true
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
        name: "Major Triad Cheetsheet",
        category: "Triads",
        moveable: true,
        positions: [
            {
                "guitar_string": 0,
                "fret": 2,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 2,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 2,
                "fret": 3,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 3,
                "fret": 4,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 4,
                "fret": 4,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 2,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 0,
                "fret": 7,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 1,
                "fret": 8,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 7,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 3,
                "fret": 9,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 4,
                "fret": 10,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 5,
                "fret": 10,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 13,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 1,
                "fret": 15,
                "label": "3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 2,
                "fret": 15,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 3,
                "fret": 15,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 4,
                "fret": 13,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 5,
                "fret": 13,
                "label": "5",
                "color": "#FA1A0D"
            }
        ],
    },
    {
        name: "Minor Triad Cheetsheet",
        category: "Triads",
        moveable: true,
        positions: [
            {
                "guitar_string": 0,
                "fret": 2,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 2,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 3,
                "fret": 4,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 4,
                "fret": 4,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 5,
                "fret": 2,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 1,
                "fret": 8,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 2,
                "fret": 7,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 4,
                "fret": 10,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 5,
                "fret": 10,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 0,
                "fret": 13,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 2,
                "fret": 15,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 3,
                "fret": 15,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 4,
                "fret": 13,
                "label": "1",
                "color": "#58B4EE"
            },
            {
                "guitar_string": 5,
                "fret": 13,
                "label": "5",
                "color": "#FA1A0D"
            },
            {
                "guitar_string": 2,
                "fret": 2,
                "label": "b3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 0,
                "fret": 6,
                "label": "b3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 3,
                "fret": 8,
                "label": "b3",
                "color": "#FD8D04"
            },
            {
                "guitar_string": 1,
                "fret": 14,
                "label": "b3",
                "color": "#FD8D04"
            }
        ]
    }
];
exports.defaultGroupedOptions = exports.pattern_categories.map(function (c) { return ({ label: c, options: exports.patterns.filter(function (p) { return p.category == c; }).map(function (p) { return ({ value: p.name, label: p.name }); }) }); });
var Patterns;
(function (Patterns) {
    Patterns.data = exports.patterns;
})(Patterns || (exports.Patterns = Patterns = {}));
