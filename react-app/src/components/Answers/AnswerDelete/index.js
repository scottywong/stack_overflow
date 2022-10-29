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
    <div>
      <ul>{errors && errors.map((error) => <li key={error}>{error}</li>)}</ul>
      <p>Are you sure you want to delete this answer?</p>
      <button onClick={() => onDelete()}>Delete</button>
      <button onClick={() => setDeleteAnswerModal(false)}>Cancel</button>
    </div>
  );
}

export default AnswerDelete;
