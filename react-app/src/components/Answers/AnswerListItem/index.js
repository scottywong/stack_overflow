import React from 'react';
import { NavLink } from 'react-router-dom';
import './AnswerListItem.css';


function AnswerListItem({answer}) {

    let answerBody;
    answer?.body && answer?.body?.length >= 50 ? answerBody = answer?.body?.substring(0,50) + ' ...' : answerBody = answer?.body;
    return (<div>

            {console.log('this is the answer: ', answer)}
            {answer && (
                <div className='ali-container'>
                <NavLink className="ali-link" to={`/questions/${answer.questionId}`}>
                    <h3 className='ali-title'>{answerBody}</h3>
                </NavLink>
                <p>Answered by: {answer.username}</p>
                </div>
            )}
            </div>
    )
}

export default AnswerListItem;