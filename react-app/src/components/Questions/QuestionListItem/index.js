import React from 'react'
import { NavLink } from 'react-router-dom';

function QuestionListItem({ question }) {
  return (
    <div>
      <NavLink to={`/questions/${question.id}`}>
        {question.title}
      </NavLink>
      {question.body}
    </div>
  );
}

export default QuestionListItem
