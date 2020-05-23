import { createStoreon } from "storeon";
import { storeonDevtools } from 'storeon/devtools';

let todos = store => {
    store.on('@init', () => ({ todos: [{id: 1, item:"Follow come todo lol."}, {id: 2, item: "Uhm. It works sha"}] }))
    store.on('addTodo', ({ todos }, todo) => ({ todos: todos.concat([{id: todos.length, item: todo}])}))
    store.on('deleteTodo', ({ todos }, id) => ({ todos: todos.filter(todo => todo.id !== id) }))
}

const store = createStoreon([todos, process.env.NODE_ENV !== 'production' && storeonDevtools])

export default store;