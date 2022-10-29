import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchEditQuestions, fetchQuestion } from '../../../store/questions';
import './QuestionEditForm.css';

function QuestionEditForm({ setShowEditModal, question, refreshQuestion }) {
  // const { questionId } = useParams();
  // const parsedId = parseInt(questionId, 10);
  const dispatch = useDispatch();
  const history = useHistory();
  // const question = useSelector(state => state.questions);

  const [title, setTitle] = useState(question.title);
  const [body, setBody] = useState(question.body);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      body
    }

    const editedQuestion = dispatch(fetchEditQuestions(payload, question?.id))
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
      <ul>
        {errors.length > 0 && errors.map(error => (
          <li className='errors' key={error}>{error}</li>
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
        />
      </label>
      <label className='modal-input-body-label'>
        Body
        <textarea 
          className='modal-input-body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
        />
      </label>
      <div>
        <button className='modal-btn modal-submit-btn'>Submit</button>
        <button className='modal-btn modal-cancel-btn'>Cancel</button>
      </div>
    </form>
  )
}

export default QuestionEditForm;
