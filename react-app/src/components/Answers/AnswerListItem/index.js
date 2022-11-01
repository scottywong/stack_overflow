import React from 'react';
import { NavLink } from 'react-router-dom';
import './AnswerListItem.css';


function AnswerListItem({answer}) {

    const answerDate = new Date(Date.parse(answer?.created_on));
    return (
        <div className='ali-container'>
        <NavLink className="ali-link" to={`/questions/${answer?.questionId}`}>
            <h3 className='ali-title'>{answer?.body}</h3>
        </NavLink>
  
        </div>
    ); 
}

export default AnswerListItem;