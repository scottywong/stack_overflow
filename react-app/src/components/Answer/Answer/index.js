import React, { useState, useEffect } from 'react';
import CommentList from '../../Comments/CommentList'
import './Answer.css'

function Answer({answer}) {

    return (
        <div className="answer-container">
            <p>{answer?.body}</p>

            {answer?.Comments && 

                <CommentList commentList={answer.Comments}></CommentList>
            } 

            <div className='answer-actions-container'>
                <button>Edit Answer</button>
                <button>Delete Answer</button>
                <button>Post Comment</button>
            </div>
        </div>
    )

}

export default Answer;
