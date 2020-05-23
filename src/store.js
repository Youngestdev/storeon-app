import { createStoreon } from "storeon";

let todos = store => {
    store.on('@init', () => ({ todos: [{id: 1, item:"Follow come todo lol."}, {id: 2, item: "Uhm. It works sha"}] }))
    store.on('addTodo', ({ todos }, todo) => ({ todos: todos.concat([{id: todos.length, item: todo}])}))
}

const store = createStoreon([todos])

export default store;