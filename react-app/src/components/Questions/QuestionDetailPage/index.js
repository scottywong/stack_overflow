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

const question = useSelector(state => state.questions);
const { Answers } = question

useEffect(() => {
  dispatch(fetchQuestion(parsedId))
}, [dispatch])

  return (
    <div>
        <Question question={question} />
        <AnswerList answerList={Answers} />
    </div>
  )
}

export default QuestionDetailPage