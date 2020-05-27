import { createStoreon } from 'storeon';
import { persistState } from '@storeon/localstorage';
import { storeonDevtools } from 'storeon/devtools';
import { v4 as uuidv4 } from 'uuid';

let notes = store => {
  store.on('@init', () => ({
    notes: [
      { id: uuidv4(), item: 'Storeon is a React state management library and unlike other state management libraries which uses Context, it utilises an event-driven approach like Redux.' },
      { id: uuidv4(), item: 'This is a really short note. I have began to study the basic concepts of technical writing and I\'m optimistic about becoming one of the best technical writer.' },
    ],
  }));
  store.on('addNote', ({ notes }, note) => {
    return {
      notes: [...notes, { id: uuidv4(), item: note }],
    };
  });
  store.on('deleteNote', ({ notes }, id) => ({
    notes: notes.filter(note => note.id !== id),
  }));
};

const store = createStoreon([
  notes,
  persistState(['notes']),
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);

export default store;
