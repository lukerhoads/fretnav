import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Pattern, PositionConfig } from "@/types/pattern";
import styles from "./fretboard.module.css"
import useMousePosition from "@/app/hooks/useMousePosition";
import { getNote } from "@/utils/note";
import { DEFAULT_TUNING } from "@/constants/notes";

// TODO: shift to vertical after certain width achieved

type Props = {
    tuning: string[],
    initial_positions: PositionConfig[],
    moveable: boolean,
    overlaidPatterns?: Pattern[],
    lefty?: boolean,
    showNotes?: boolean,
    mutedStrings?: number[],
    onPositionAdd?: (idx: number, note: string) => void
    onPositionHighlight?: (idx: number) => void,
    onPositionDelete?: (idx: number) => void
}

const Fretboard = ({ tuning = DEFAULT_TUNING, mutedStrings = [], initial_positions = [], moveable = false, lefty = false, showNotes = false, overlaidPatterns = [], onPositionAdd = () => {}, onPositionHighlight = () => {}, onPositionDelete = () => {} }: Props) => {
    const mousePosition = useMousePosition()
    const [controllerString, setControllerString] = useState(-1)
    const [controllerFret, setControllerFret] = useState(-1)
    const [initialPositions, setInitialPositions] = useState<PositionConfig[]>([])
    const [draggingPositions, setDraggingPositions] = useState<PositionConfig[]>([])
    const [dragging, setDragging] = useState(false)
    const [counter, setCounter] = useState<NodeJS.Timeout | null>(null)
    const bc = useRef<HTMLDivElement>(null)
    let [positions, setPositions] = useState(initial_positions)
    
    const handleRightClick = (e: any, idx: number) => {
        e.preventDefault()
        onPositionDelete(idx)
    }

    const start = (fret: number, string: number) => {
        setCounter(setTimeout(() => {
            setDragging(true)
            setControllerFret(fret)
            setControllerString(string)
            setInitialPositions(positions)
            setDraggingPositions(positions)
            document.addEventListener("keydown", keyPressed);
            // document.addEventListener("mouseup", mouseUp)
        }, 500))
    }

    const cleanUp = () => {
        if (counter) clearInterval(counter)
        setDragging(false)
        setDraggingPositions([])
        setInitialPositions([])
        setControllerFret(-1)
        setControllerString(-1)
    }

    const keyPressed = (e: any) => {
        if ((e.key == "Escape" || e.key == "Enter") && dragging) {
            setPositions(e.key == "Escape" ? initialPositions : draggingPositions)
            cleanUp()
        }
    }

    useEffect(() => {
        setPositions([...initial_positions])
        if (initialPositions.length == 0) {
            setDraggingPositions([])
            setInitialPositions([])
        }
    }, [initial_positions])

    useEffect(() => {
        document.addEventListener("keydown", keyPressed);
        return () => {
            document.removeEventListener("keydown", keyPressed);
        };
    }, [initialPositions, draggingPositions])

    useEffect(() => {
        if (dragging && draggingPositions.length > 0 && mousePosition != null && mousePosition.x != null && mousePosition.y != null && bc.current) {
            const rect = bc.current.getBoundingClientRect()
            const fret_width = rect.width / 20 
            const string_height = rect.height / 7
            const x = mousePosition.x - rect.x
            const y = mousePosition.y - rect.y
            let closest_fret = Math.floor(x / fret_width) + 1
            let string_div = Array.from(Array(7).keys()).filter(i => i != 0).map(i => Math.abs((string_height * i) - y))
            let closest_string = string_div.indexOf(Math.min(...string_div))
            if (controllerFret != closest_fret || controllerString != closest_string) {
                let fret_change = closest_fret - controllerFret
                let string_change = closest_string - controllerString
                let intDrag = [...draggingPositions].map(p => ({
                    ...p, 
                    guitar_string: p.guitar_string + string_change,
                    fret: p.fret + fret_change,
                }))
                let newDraggingPositions = intDrag.map(p => p.sync_to_note ? {
                            ...p, 
                            label: getNote(p.fret, p.guitar_string, tuning)
                        } : p)
                setDraggingPositions(newDraggingPositions)
                setControllerFret(controllerFret + fret_change)
                setControllerString(controllerString + string_change)
            }
        }
    }, [mousePosition])
    
    return (
        <div className={styles.fretboard}>
            <div className={styles.fret_labels}>
                {Array.from(Array(20).keys()).map((i) => 
                    <div key={i}><p>{i+1}</p></div>)}
            </div>
            <div className={styles.string_labels}>
                {Array.from(Array(6).keys()).map((i) => 
                    <div key={i}><p className={mutedStrings.includes(i+1) ? styles.muted : ""}>{tuning[5-i]}</p></div>)}
            </div>
            <div className={styles.board_container} ref={bc}>
                <img src="/fretboard-markers.png" alt="board" />
                <div className={styles.board}>
                    {Array.from(Array(140).keys()).map((i) => {
                        let fret = i % 20 + 1
                        let gt_string = Math.floor(i / 20)
                        let config = (dragging ? draggingPositions : positions).find(p => p.guitar_string == gt_string && p.fret == fret)
                        let overlaidConfigs = overlaidPatterns.map(p => p.positions.find(c => c.guitar_string == gt_string && c.fret == fret)).filter(c => c != undefined) as PositionConfig[]
                        let note = getNote(fret, gt_string, tuning)
                        let string_muted = "rgba(0, 0, 0, " + (mutedStrings.includes(gt_string) ? 0.5 : 1) + ")" 
                        return (
                            <div key={i} className={styles.fret_box} style={{
                                borderTop: gt_string > 0 ? `3px solid ${string_muted}` : "1px solid black",
                            }}>
                                {gt_string < 6 && (
                                    config != undefined ? (
                                        <button disabled={dragging} onMouseDown={() => moveable && start(fret, gt_string)} onContextMenu={(e) => handleRightClick(e, i)} className={styles.fret_position} style={{
                                            backgroundColor: config.color,
                                            border: "1px solid transparent",
                                            boxShadow: overlaidConfigs.length > 0 ? overlaidConfigs.map((c, i) => `0 0 0 ${2*i+1}px white, 0 0 0 ${2*i+2}px ${c.color}`).join(", ") : ""
                                            // boxShadow: "0 0 0 2px white, 0 0 0 3px green"
                                        }} onClick={() => onPositionHighlight(i)}>
                                            <p>{config.label}</p>
                                        </button>
                                    ) : (
                                        <button className={styles.fret_position} style={{
                                            backgroundColor: "transparent"
                                        }} onClick={() => onPositionAdd(i, note)} />
                                    )
                                )}
                                {gt_string < 6 && showNotes && <p className={styles.note}>{note}</p>}
                                {gt_string < 6 && overlaidConfigs.length > 0 && config == undefined && (
                                    overlaidConfigs.length > 0 && overlaidConfigs.map(c => (
                                        <button onContextMenu={(e) => handleRightClick(e, i)} className={styles.fret_position} style={{
                                            backgroundColor: c.color,
                                            opacity: 0.5,
                                            border: "1px solid transparent",
                                            pointerEvents: "none"
                                        }}>
                                            <p>{c.label}</p>
                                        </button>
                                    ))
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Fretboard;