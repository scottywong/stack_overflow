import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchQuestion } from '../../../store/questions';
import './Question.css';

function Question() {
  // const { questionId } = useParams();
  // const parsedId = parseInt(questionId, 10);
  // const dispatch = useDispatch();
  // const question = useSelector(state => state.questions);
  // const { Answers, Comments, Votes } = question

  // useEffect(() => {
  //   dispatch(fetchQuestion(parsedId))
  // }, [dispatch])

  return (
    <>
      <div>Here's a question for you...</div>
      {/* <div>
        <h3>{question.title}</h3>
      </div>
      <div>
        <p>{question.body}</p>
      </div>
      <div>
        {Answers.map(answer => {
          <p>{answer.body}</p>
          {Comments.map(comment => {
            <p>{comment.body}</p>
          })}
          {Votes.map(vote => {
            <p>{vote.voteDirection}</p>
          })}
          <p>{Votes.length}</p>
        })}
      </div> */}
    </>
  )
}

export default Question;
