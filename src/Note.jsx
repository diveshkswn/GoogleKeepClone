/* eslint-disable linebreak-style */
import React from 'react';

const noteHeading = 'This is heading';
const noteContent = 'This is note content';

function Note() {
  return (
    <div className="note">
      <h1>{noteHeading}</h1>
      <p>{noteContent}</p>
    </div>
  );
}

export default Note;
