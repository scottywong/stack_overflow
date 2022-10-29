import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteAnswer } from '../../../store/answers';
import './AnswerDelete.css';

function AnswerDelete({ setDeleteAnswerModal, refreshQuestion, answerId }) {
//   const { answerId } = useParams();
  const dispatch = useDispatch();

  const onDelete = () => {
    console.log("ANSWER ID", answerId)
    dispatch(fetchDeleteAnswer(answerId))
    .then(() => refreshQuestion())
    .then(() => setDeleteAnswerModal(false))
  };
  return (
    <div>
      <p>Are you sure you want to delete this answer?</p>
      <button onClick={() => onDelete()}>Delete</button>
      <button onClick={() => setDeleteAnswerModal(false)}>Cancel</button>
    </div>
  );
}

export default AnswerDelete;
