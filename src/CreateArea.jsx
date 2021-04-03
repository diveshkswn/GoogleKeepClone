/* eslint-disable linebreak-style */
import React from 'react';

function CreateArea(props) {
  const [addItem] = { props };
  return (
    <form onSubmit={addItem}>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Take note..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default CreateArea;
