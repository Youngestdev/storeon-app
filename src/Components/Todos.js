import React from "react";
import { useStoreon } from 'storeon/react';

//TODO: TURN THE APP INTO A FULL APP

    const Todos = () => {
    const {dispatch, notes } = useStoreon('notes')
    const [value, setValue] = React.useState("")

    const deleteNote= id => {
        dispatch('deleteNote', id)
    }

    const submit = () => {
        dispatch('addNote', value)
        setValue("")
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <textarea onChange={handleInput} value={value}/><br/>
            <button onClick={() => submit()}> Add A Note </button>
            <hr />
            <ul>
                {notes.map(note => (
                    <div className="box">
                        <div className="container">
                            <li key={note.id}>{note.item}</li><br />
                            <button onClick={() => deleteNote(note.id)}>Delete note</button>
                        </div>
                    </div>
                ))}
            </ul>
        </>
    )
}
export default Todos;