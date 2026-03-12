import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useColor } from "../context/ColorContext";

const useNotes = () => {
    const [notes, setNotes]= useState(() => {
        return JSON.parse(localStorage.getItem("notes")) || []; // Lee del localStorage si hay notas
    });
    const { color } = useColor();
    const [note, setNote] = useState({
        text: "",
        color: color,
    });

    const addNote = (text, color) => {
        if (notes.length >= 10) {
            alert('Máximo 10 notas')
            return
        };
        const newNote = ({
            id: uuidv4(), 
            text: text, 
            color: color
        })
        setNotes((prevNotes) => [...prevNotes, newNote])
    };

    const deleteNote = (id) => {
        const filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

// Guardar en el LocalStorage

    useEffect(() => {
	    localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

return { notes, note, setNote, addNote, deleteNote }
};

export default useNotes;