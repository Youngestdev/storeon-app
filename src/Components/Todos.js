import React from "react";
import { useStoreon } from 'storeon/react';

const Todos = () => {
    const {dispatch, todos } = useStoreon('todos')
    const [value, setValue] = React.useState("")


    const submit = () => {
        dispatch('addTodo', value)
        setValue("")
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInput} value={value}/>
            <button onClick={() => submit()}>Add Todo :) </button>
            {todos.map(t => <RenderTodo todo={t} /> )}
        </div>
    )
}

const RenderTodo = ( { todo } ) => {
    return (
        <ul>
            <li key={todo.id}>{todo.item}</li>            
        </ul>
    )
}

export default Todos;