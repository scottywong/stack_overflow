// ******** Comments Constraints ********
const CREATE_COMMENT = 'comments/create';
const DELETE_COMMENT = 'comments/delete';

// ******** Comments Actions ********

// CREATE Comment
export const createComment = (comment, answerId) => {
    return {
        type: CREATE_COMMENT,
        payload: {
            comment,
            answerId
        }
    }
}

// DELETE Comment
export const deleteComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}

// ******** Comments THUNKS ********

// CREATE Comments Thunk
export const fetchCreateComment = (answerId, comments) => async (dispatch) => {
  const res = await fetch(`/api/answers/${answerId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comments),
  });

  if (res.ok){
    const comment = await res.json();
    dispatch(createComment(comment, answerId));
    return comment;
  };
  return res;
};

// DELETE Comment Thunk
export const fetchDeleteComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    });

    if (res.ok){
        const comment = await res.json();
        dispatch(deleteComment(comment));
        return comment;
    }
    return res;
}

// ******** REDUCER ********
const initialState = {};

const commentsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case CREATE_COMMENT:
            newState = {...state, [action.payload.comment.id]: action.payload.comment}
            return newState;
        case DELETE_COMMENT:
            delete newState[action.payload];
            return newState;
        default:
            return newState;
    }
}

export default commentsReducer;
