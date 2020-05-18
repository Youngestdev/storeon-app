import React from "react";
import { useStoreon } from 'storeon/react';

const Todos = () => {
    const {dispatch, todos } = useStoreon('todos')
    // TODO: Use the @dispatch event handler to set the value for the incoming todo.
    return (
        <div>
            <input type="text" />
            <button onClick={() => dispatch('addTodo', "")}>Add Todo :) </button>
            {todos.map(t => <RenderTodo todo={t} /> )}
        </div>
    )
}

const RenderTodo = ( { todo } ) => {
    return (
        <ul>
            <li>{todo}</li>            
        </ul>
    )
}

export default Todos;