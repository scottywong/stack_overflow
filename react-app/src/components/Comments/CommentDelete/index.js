import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDeleteComment } from '../../../store/comments';

function CommentDelete({ commentId, setShowDeleteModal, refreshQuestion }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);

    const onDelete = () => {
        dispatch(fetchDeleteComment(commentId))
          .then(() => setShowDeleteModal(false))
          .then(refreshQuestion())
          .then(refreshQuestion())
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this comment?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowDeleteModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default CommentDelete;
