import React from 'react'
import { NavLink } from 'react-router-dom';

function QuestionListItem({ question }) {
  return (
    <div>
      <NavLink className="qli-link" to={`/questions/${question.id}`}>
        <h3 className='qli-title'>{question.title}</h3>
      </NavLink>
      {question.body}
    </div>
  );
}

export default QuestionListItem
