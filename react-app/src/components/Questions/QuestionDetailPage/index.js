import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Question from '../Question';
import AnswerList from '../../Answer/AnswerList';
import { fetchQuestion } from '../../../store/questions';

function QuestionDetailPage() {
const { questionId } = useParams();
const parsedId = parseInt(questionId, 10);
const dispatch = useDispatch();

const questions = useSelector(state => state.questions);
const answers  = questions.one_question?.Question?.Answers
const comments = useSelector(state => state.comments )

useEffect(() => {
  dispatch(fetchQuestion(parsedId))
}, [dispatch])

  return (
    <div className='qdp-container'>
      <Question question={questions.one_question?.Question} />
      <AnswerList questionId={parsedId} />
    </div>
  );
}

export default QuestionDetailPage
