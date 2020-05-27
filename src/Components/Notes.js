import React from 'react';
import { useStoreon } from 'storeon/react';

//TODO: TURN THE APP INTO A FULL APP

const Notes = () => {
  const { dispatch, notes } = useStoreon('notes');
  const [value, setValue] = React.useState('');

  const deleteNote = id => {
    dispatch('deleteNote', id);
  };

  const submit = () => {
    dispatch('addNote', value);
    setValue('');
  };

  const handleInput = e => {
    setValue(e.target.value);
  };
  return (
    <section>
      <header>Quick Notes</header>

      <div className='addNote'>
        <textarea onChange={handleInput} value={value} />
        <button onClick={() => submit()}> Add A Note </button>
      </div>

      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <div className='todo'>
              <p>{note.item}</p>
              <button onClick={() => deleteNote(note.id)}>Delete note</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Notes;
