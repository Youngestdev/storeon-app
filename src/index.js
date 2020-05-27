import React from 'react';
import { render } from 'react-dom';
import { StoreContext } from 'storeon/react';
import Notes from './Components/Notes';
import store from '../src/store';

function App() {
  return (
    <>
      <StoreContext.Provider value={store}>
        <Notes />
      </StoreContext.Provider>
    </>
  );
}

const root = document.getElementById('root');
render(<App />, root);
