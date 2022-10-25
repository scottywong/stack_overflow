import React, { useState, useEffect } from 'react';
import CommentList from '../../Comments/CommentList'
import './Answer.css'

function Answer({answer}) {

    return (
        <div className="answer-container">
        <p>{answer.body}</p>

        {answer?.Comments && 

            <CommentList commentList={answer.Comments}></CommentList>
        } 
        </div>
    )

}

export default Answer;