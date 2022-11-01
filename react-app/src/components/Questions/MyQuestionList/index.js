import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserQuestions } from '../../../store/questions';
import QuestionListItem from '../QuestionListItem';
import './MyQuestionList.css';

function MyQuestionList() {
  const dispatch = useDispatch()
  const [validationErrors, setValidationErrors] = useState([]);

  const questions = Object.values(useSelector(state => state.questions?.user_questions ? state.questions.user_questions : state.questions));

  useEffect(() => {

    dispatch(fetchUserQuestions()).catch(async (res) => {
      // const data = await res.json();
      // if (data && data.errors) setValidationErrors(data.errors);
    });
  }, [dispatch]);

  return (
    <div className='my-ql-container'>
      <div className="my-ql-header">
        <h2>My Questions</h2>
      </div>
      {questions && questions.map(question => (
          <QuestionListItem question={question}></QuestionListItem>
      ))}
    </div>
  )
}

export default MyQuestionList
