import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchEditQuestions, fetchQuestion } from '../../../store/questions';
import './QuestionEditForm.css';

function QuestionEditForm() {
  const { questionId } = useParams();
  const parsedId = parseInt(questionId, 10);
  const dispatch = useDispatch();
  const history = useHistory();
  const question = useSelector(state => state.questions);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState(question.body);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    dispatch(fetchQuestion(parsedId))
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: parsedId,
      title,
      body
    }

    const editedQuestion = dispatch(fetchEditQuestions(payload))
      .then(() => {
        // setShowEditModal(false);
        history.push('/user/questions')
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      });

      return editedQuestion;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit your question</h2>
      <ul>
        {validationErrors.length > 0 && validationErrors.map(error => (
          <li className='errors' key={error}>{error}</li>
        ))}
      </ul>
      <label>
        Title
        <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name='title'
        />
      </label>
      <label>
        Body
        <textarea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
        />
      </label>
      <button>Submit</button>
      <button>Cancel</button>
    </form>
  )
}

export default QuestionEditForm;
