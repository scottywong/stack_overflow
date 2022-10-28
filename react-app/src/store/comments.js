// ******** Comments Constraints ********
const GET_COMMENTS = 'comments/get';
const CREATE_COMMENTS = 'comments/create';
const DELETE_COMMENTS = 'comments/delete';

// ******** Comments Actions ********

// GET Comments
export const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        payload: comments?.Comments
        
    }
}

// CREATE Comments
export const createComments = (comment, answerId) => {
    return {
        type: CREATE_COMMENTS,
        payload: {
            comment,
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
// Get Comments Thunk
export const fetchGetComments = (answerId) => async (dispatch) => {
    const res = await fetch(`/api/answers/${answerId}/comments`);

    if (res.ok){
      const comments = await res.json();
      dispatch(getComments(comments));
      return comments;
    };
    return res;
  };


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
        case GET_COMMENTS:
            action.payload.forEach(comment => newState[comment.id] = comment)
            return newState;
        case CREATE_COMMENTS:
            newState = {...state, [action.payload.comment.id]: action.payload.comment}
            return newState;
        case DELETE_COMMENTS:
            delete newState[action.payload];
            return newState;
        default:
            return newState;
    }
}

export default commentsReducer;
