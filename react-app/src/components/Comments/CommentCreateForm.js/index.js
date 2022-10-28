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

        return dispatch(fetchCreateComment(answerId, payload)).then(
          setCommentModal(false)
        ).then( refreshQuestion())
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
      <button onClick={() => setCommentModal(false)}>Cancel</button>
    </form>
  );
}

export default CommentCreateForm;
