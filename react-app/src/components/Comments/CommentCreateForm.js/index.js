import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCreateComments } from '../../../store/comments';

function CommentCreateForm({ answerId, setCommentModal }) {
    const dispatch = useDispatch();

    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    console.log('Answer ID:', answerId)

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body
        };

        return dispatch(fetchCreateComments(answerId, payload))
    }
  return (
    <form onSubmit={onSubmit}>
      <label>Body</label>
      <input
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Submit</button>
      {/* <button onClick={setCommentModal(false)}>Cancel</button> */}
    </form>
  );
}

export default CommentCreateForm;
