// ******** Comments Constraints ********
const CREATE_COMMENTS = 'comments/create';
const DELETE_COMMENTS = 'comments/delete';

// ******** Comments Actions ********

// CREATE Comments
export const createComments = (comments, answerId) => {
    return {
        type: CREATE_COMMENTS,
        payload: {
            comments,
            answerId
        }
    }
}

// DELETE Comments
export const deleteComments = (id) => {
    return {
        type: DELETE_COMMENTS,
        payload: id
    }
}

// ******** Comments THUNKS ********

// CREATE Comments Thunk
export const fetchCreateComments = (answerId, comments) => async (dispatch) => {
  const res = await fetch(`/api/answers/${answerId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comments),
  });

  if (res.ok){
    const comment = await res.json();
    dispatch(createComments(comment, answerId));
    return comment;
  };
  return res;
};

// DELETE Comments Thunk
export const fetchDeleteComments = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    });

    if (res.ok){
        const comment = await res.json();
        dispatch(deleteComments(comment));
        return comment;
    }
    return res;
}

// ******** REDUCER ********
const initialState = {};

const commentsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case CREATE_COMMENTS:
            newState = {...state, [action.payload.id]: action.payload}
            return newState;
        case DELETE_COMMENTS:
            delete newState[action.payload];
            return newState;
        default:
            return newState;
    }
}

export default commentsReducer;
