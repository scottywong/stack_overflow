import React from 'react';
import './Question.css';

function Question({ question }) {
  return (
    <div className='q-container'>
      <h4>{question?.title}</h4>
      <p>{question?.body}</p>
      <div className='q-actions-container'>
        <button>Edit Question</button>
        <button>Delete Question</button>
        <button>Post Answer</button>
      </div>
    </div>
  );
}

export default Question;
