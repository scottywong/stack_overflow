import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Answer from '../Answer';
import { fetchQuestion } from '../../../store/questions';
import './AnswerList.css'

function AnswerList({questionId}) {

const questions = useSelector(state => state.questions);
const question =  questions?.one_question;
const answerList  = question?.Question?.Answers

console.log('answerList: ', answerList);

const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchQuestion(questionId));
  }, [dispatch])

  
    return (
        <div className="answerList-container">
            
        <div className="answerList-size">
            <h4>{answerList?.length} Answers</h4>
        </div>
        { answerList && 
        answerList.map(answer => {
            return <Answer answer={answer}> </Answer>
        })} 
        </div>
    )

}

export default AnswerList;
