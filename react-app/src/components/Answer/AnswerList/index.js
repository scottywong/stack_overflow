import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Answer from '../Answer';
import './AnswerList.css'

function AnswerList({answerList}) {

    return (
        <div className="answerList-container">

        { answerList && 
        answerList.map(answer => {
            return <Answer answer={answer}> </Answer>
        })} 
        </div>
    )

}

export default AnswerList;
