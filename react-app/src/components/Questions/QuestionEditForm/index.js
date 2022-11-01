import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchEditQuestions, fetchQuestion } from '../../../store/questions';
import './QuestionEditForm.css';

function QuestionEditForm({ setShowEditModal, question, refreshQuestion }) {
  
  const dispatch = useDispatch();

  const [title, setTitle] = useState(question?.title);
  const [body, setBody] = useState(question?.body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: question?.id,
      title,
      body
    }

    const editedQuestion = dispatch(fetchEditQuestions(payload))
      .then(refreshQuestion())
      .then(refreshQuestion())
      .then(() => {
        setShowEditModal(false);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });

      return editedQuestion;
  }

  return (
    <form className='modal-container' onSubmit={handleSubmit}>
      <h2 className='modal-form-title'>Edit your question</h2>

      <input
        className='modal-input-title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name='title'
        required
      />
      <textarea
        className='modal-input-body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        name='body'
        required
      />
      <ul>
        {errors.length > 0 &&
          errors.map((error) => (
            <li className='errors' key={error}>
              {error}
            </li>
          ))}
      </ul>
      <div>
        <button className='modal-btn modal-submit-btn'>Submit</button>
        <button className='modal-btn modal-cancel-btn'>Cancel</button>
      </div>
    </form>
  );
}

export default QuestionEditForm;
