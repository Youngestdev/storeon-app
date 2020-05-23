import React from "react";
import { useStoreon } from 'storeon/react';

const Todos = () => {
    const {dispatch, todos } = useStoreon('todos')
    const [value, setValue] = React.useState("")

    const deleteTodo = id => {
        dispatch('deleteTodo, id')
    }

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
            {todos.map(todo =>
                // TODO: Add an update functionality as a bonus
                <ul>
                    <li key={todo.id}>{todo.item}</li>
                    <button onClick={deleteTodo(todo.id)}>Delete todo</button>
                </ul>
            )}
        </div>
    )
}

export default Todos;