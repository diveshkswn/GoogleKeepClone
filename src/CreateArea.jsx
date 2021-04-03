/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  return (
    <form onSubmit={props.handleAddSubmit}>
      <input onChange={props.addItem} value={props.item.title} name="title" placeholder="Title" />
      <textarea onChange={props.addItem} value={props.item.content} name="content" placeholder="Take note..." />
      <button type="submit" onClick={props.handleAddSubmit}>
        <AddIcon />

      </button>

    </form>
  );
}

export default CreateArea;
