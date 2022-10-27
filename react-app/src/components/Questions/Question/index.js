import React from 'react';
import './Question.css';

function Question({ question }) {
  return (
    <div>
      <h4>{question?.title}</h4>
      <p>{question?.body}</p>
      <div>
        <button>Edit Question</button>
        <button>Delete Question</button>
        <button>Post Answer</button>
      </div>
    </div>
  );
}

export default Question;
