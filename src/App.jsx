/* eslint-disable linebreak-style */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import noteList from './notes';

function notes(noteEntry) {
  return (
    <Note
      key={noteEntry.key}
      heading={noteEntry.title}
      content={noteEntry.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {noteList.map(notes)}
      <Footer />

    </div>
  );
}

export default App;
