import useNotes from "../hooks/useNotes";
import { useColor } from "../context/ColorContext";
import ColorSelector from "./ColorSelector";
import Note from "./Note";

const NoteBoard = () => {
    const { notes, note, setNote, addNote, deleteNote } = useNotes()
    const { color } = useColor();

    return(
        <div className="note-board">
        {notes.length === 0 && <h2>No hay notas que mostrar</h2>}
        <label htmlFor="note"><h3>Crea una nueva nota:</h3></label>
        <input  type="text" 
                name="note"
                placeholder="Escribe una nota..." 
                value={note.text} 
                onChange={(e) => setNote({...note, text: e.target.value})}
                onKeyDown={(e) => {
                if (e.key === "Enter" && note.text.trim() !== "") {
                addNote(note.text, color)
                setNote({ ...note, text: "" })
                }
                }}
        />
        <button onClick={() => {
            if (note.text.trim() === "") { 
                alert('Introduce un texto en la nota')
                return};
            addNote(note.text, color)
            setNote({...note, text: ''})
            }
            } 
            >Crear</button>
        <ColorSelector/>
            <div className="notes-container">
            {notes.map((note) => {
            return  (
                <Note key={note.id} note={note} deleteNote={deleteNote}/>
            )
            })}
            </div>
        </div>
    )

}

export default NoteBoard;