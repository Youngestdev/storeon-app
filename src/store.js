import { createStoreon } from "storeon";
import { persistState } from '@storeon/localstorage'
import { storeonDevtools } from 'storeon/devtools';
import { v4 as uuidv4 } from 'uuid';

let notes = store => {
    store.on('@init', () => ({ notes: [{id: uuidv4(), item:"Follow come todo lol."}, {id: uuidv4(), item: "Uhm. It works sha"}] }))
    store.on('addNote', ({ notes }, note) => {
        return {
            notes: [ ...notes, {id: uuidv4(), item: note}]
        }
    })
    store.on('deleteNote', ({ notes }, id) => ({ notes: notes.filter(note => note.id !== id) }))
}

const store = createStoreon([notes,
    persistState(['notes']),
    process.env.NODE_ENV !== 'production' && storeonDevtools])

export default store;