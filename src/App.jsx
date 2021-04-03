/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import noteList from './notes';
import CreateArea from './CreateArea';

function getNotes(noteEntry) {
  return (
    <Note
      key={noteEntry.key}
      heading={noteEntry.title}
      content={noteEntry.content}
    />
  );
}

function App() {
  const [item, setItem] = useState({
    title: '',
    content: '',
  });

  function addItem() {

  }

  return (
    <div>
      <Header />
      <CreateArea
        addItem={addItem}
      />
      {noteList.map(getNotes)}
      <Footer />
    </div>
  );
}

export default App;
