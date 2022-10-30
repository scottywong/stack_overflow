import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteAnswer } from '../../../store/answers';
import './AnswerDelete.css';

function AnswerDelete({ setDeleteAnswerModal, refreshQuestion, answerId }) {
//   const { answerId } = useParams();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([])

  const onDelete = () => {
    dispatch(fetchDeleteAnswer(answerId))
      .then(() => refreshQuestion())
      .then(() => refreshQuestion())
      .then(() => setDeleteAnswerModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this answer?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setDeleteAnswerModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default AnswerDelete;
