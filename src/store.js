// @ts-ignore

import React from "react";
import { createStoreon } from "storeon";

let todos = store => {
    store.on('@init', () => ({ todos: ["Follow come todo lol.", "Uhm. It works sha"] }))

    store.on('addTodo', ({ todos }, todo) => ({ todos: todos.concat([todo])}))
}

const store = createStoreon([todos])
// const todoStore = createStoreon([])

export default store;