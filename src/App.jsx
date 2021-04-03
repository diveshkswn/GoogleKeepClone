/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [item, setItem] = useState({
    title: '',
    content: '',
  });

  const [itemList, setitemList] = useState([]);

  function addItem(event) {
    const { name, value } = event.target;
    setItem((oldVal) => ({ ...oldVal, [name]: value }));
  }

  function handleAddSubmit(e) {
    setitemList((oldVal) => [...oldVal, item]);
    setItem({
      title: '',
      content: '',
    });
    e.preventDefault();
  }

  function handleDelete(event) {
    console.log(event);
    setitemList((oldVal) => oldVal.filter((val, index) => index !== event));
  }

  function getNotes(noteEntry, index) {
    return (
      <Note
        key={index}
        id={index}
        title={noteEntry.title}
        content={noteEntry.content}
        handleDelete={handleDelete}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        item={item}
        addItem={addItem}
        handleAddSubmit={handleAddSubmit}
      />
      {itemList.map(getNotes)}

      <Footer />
    </div>
  );
}

export default App;
