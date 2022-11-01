import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCreateComment } from '../../../store/comments';

function CommentCreateForm({ answerId,refreshQuestion, setCommentModal }) {
    const dispatch = useDispatch();

    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body
        };

        return dispatch(fetchCreateComment(answerId, payload))
          .then(refreshQuestion())
          .then(refreshQuestion()) //double refresh to ensure changes are reflected on Question
          .then(setCommentModal(false))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
  return (
    <form className='modal-container' onSubmit={onSubmit}>
      <h2 className='modal-form-title'>Post Your Comment</h2>
      <input
        className='modal-input-body'
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Write your comment here'
      />
      <ul className='errorMsg'>
        {errors.map((error, idx) => (
          <li className='errors' key={idx}>
            {error}
          </li>
        ))}
      </ul>
      <div>
        <button className='modal-btn modal-submit-btn'>Submit</button>
        <button
          className='modal-btn modal-cancel-btn'
          onClick={() => setCommentModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CommentCreateForm;
