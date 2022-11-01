import React from 'react'
import { NavLink } from 'react-router-dom';
import './QuestionListItem.css';

function QuestionListItem({ question }) {

  let questionTitle;
  question?.body && question?.body.length >= 50 ? questionTitle = question.body.substring(0,50) + ' ...' : questionTitle = question.body
  return (
    <div className='qli-container'>
      <NavLink className="qli-link" to={`/questions/${question.id}`}>
        <h3 className='qli-title'>{questionTitle}</h3>
      </NavLink>
      <p>Posted by: {question?.username}</p>
    </div>
  );
}

export default QuestionListItem
