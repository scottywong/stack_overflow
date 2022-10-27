import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateQuestions, fetchAllQuestions } from '../../../store/questions';
import './QuestionCreateForm.css';

function QuestionCreateForm({ setShowModal }) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title, 
      body
    }

    const createdQuestion = await dispatch(fetchCreateQuestions(payload))
      .then(() => {
        setShowModal(false)
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      })

      return createdQuestion;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ask a question</h2>
      <ul>
        {validationErrors.map(error => 
          <li className='errors' key={error}>{error}</li>
        )}
      </ul>
      <label>
        Title
        <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name='title'
          placeholder="be specific and imagine you're asking another person"
        />
      </label>
      <label>
        Body
        <textarea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='What are the details of your problem?'
        />
      </label>
      <button type='submit'>Submit your question</button>
      <button onClick={() => setShowModal(false)}>Cancel</button>
    </form>
  )
}

export default QuestionCreateForm;
