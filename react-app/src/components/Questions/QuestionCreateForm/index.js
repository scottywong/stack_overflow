import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCreateQuestions, fetchAllQuestions } from '../../../store/questions';
import './QuestionCreateForm.css';

function QuestionCreateForm({ setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory()

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
      .then(() => history.push('/profile'))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setValidationErrors(data.errors);
      })

      return createdQuestion;
  }

  return (
    <form onSubmit={handleSubmit} className='modal-container'>
      <h2 className='modal-form-title'>Ask a question</h2>
      <ul>
        {validationErrors.map((error) => (
          <li className='errors' key={error}>
            {error}
          </li>
        ))}
      </ul>
      <label className='modal-input-title-label'>
        Title
        <input
          className='modal-input-title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name='title'
          placeholder="Be specific ..."
        />
      </label>
      <label className='modal-input-body-label'>
        Body
        <textarea
          className='modal-input-body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='What are the details of your problem?'
        />
      </label>
      <div>
        <button className='modal-btn modal-submit-btn' type='submit'>Submit your question</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </form>
  );
}

export default QuestionCreateForm;
