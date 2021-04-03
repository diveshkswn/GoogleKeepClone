/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
  return (

    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => { props.handleDelete(props.id); }} type="button">
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default Note;
