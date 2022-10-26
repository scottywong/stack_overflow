import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserQuestions } from '../../../store/questions';

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
    <div>
      <div>MyQuestionList</div>
      {questions && questions.map(question => (
        <div>
          <p>{question.title}</p>
          <p>{question.body}</p>
        </div>
      ))}
    </div>
  )
}

export default MyQuestionList
