
const Note = ({note, deleteNote}) => {
    
    return (
        <div style={{
            backgroundColor: note.color,
            padding: 10,
            margin: 10,
            border: "1px solid grey",
            borderRadius: 10,
            boxShadow: "5px 5px 15px -5px #000000"
            }}>
        <h2>{note.text.trim()}</h2>
        <button onClick={() => deleteNote(note.id)}>Eliminar</button>
        </div>
    )
};

export default Note;