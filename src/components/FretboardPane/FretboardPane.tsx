import { useEffect, useState } from 'react'
import Fretboard from '../Fretboard/Fretboard'
import styles from './fretboardpane.module.css'
import { patterns } from '@/constants/patterns'
import { getNote } from '@/utils/note'
import { Pattern, PositionConfig } from '@/types/pattern'

type Props = { 
    patternName: string
    tuning: string[]
}

// Mini pane to insert on blog posts with a Fretboard and "explore more" button
const FretboardPane = ({ patternName = "", tuning = ["E", "A", "D", "G", "B", "E"] }: Props) => {
    // Get pattern data (obv add user defined patterns when able to)
    const [pattern, setPattern] = useState<Pattern | null>(null)
    const [selectedNote, setSelectedNote] = useState<PositionConfig | null>(null)

    useEffect(() => {
        let p = patterns.find(p => p.name == patternName)
        if (p != undefined) setPattern(p)
        else {} // find pattern in user defined
    }, [])

    const onPosHighlight = (idx: number) => {

    }

    return (
        <div className={styles.container}>
            {pattern && <div className={styles.pattern_info}>
                <p>Pattern: {patternName}</p>
                <a className={styles.explore} href={`/app?tab=navigator&pattern=${pattern}`}><button>Explore</button></a>
            </div>}
            
            <Fretboard
                tuning={tuning}
                initial_positions={[]}
                overlaidPatterns={[]}
                moveable={false}
                lefty={false}
                showNotes={true}
                mutedStrings={[]} 
                onPositionHighlight={onPosHighlight}
                />

            { selectedNote && <div className={styles.note_info}>
                <p>Note: {getNote(selectedNote.fret, selectedNote.guitar_string, tuning)}</p>
            </div> }
        </div>
    )
}

export default FretboardPane