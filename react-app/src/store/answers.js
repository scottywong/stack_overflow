/******** Constants ********/
export const GET_USER_ANSWERS = 'answers/load';
export const CREATE_ANSWER = 'answers/create'
export const EDIT_ANSWER = 'answers/update';
export const DELETE_ANSWER = 'answers/delete';
export const CREATE_VOTE = 'vote/create';
export const DELETE_VOTE = 'vote/delete';

/******** Actions ********/
export const getUserAnswers = (answers) => ({
    type: GET_USER_ANSWERS,
    payload: answers
})

export const createAnswer = (answer,questionId) => (
    {
    type: CREATE_ANSWER,
    payload: {
        answer,
        questionId
    }
});

export const editAnswer = (answer) => ({
    type: EDIT_ANSWER,
    payload: answer
  });


export const deleteAnswer = (id) => ({
    type: DELETE_ANSWER,
    payload: id
});


export const createVote = (answerId) => ({
    type: CREATE_VOTE,
    payload: answerId
})

export const deleteVote = (voteId) => ({
    type: DELETE_VOTE,
    payload: voteId
})


/******** Thunks ********/

export const fetchGetUserAnswers = () => async (dispatch) => {
    let response;

    response = await fetch('/api/users/answers');

    if(response.ok){
        const answers = await response.json();
        dispatch(getUserAnswers(answers));
        return response;
    };

    
 
}

export const fetchCreateAnswer = (answer,questionId) => async (dispatch) => {
    let response;
    response = await fetch(`/api/questions/${questionId}/answers`,
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answer)
      }
    );

    if(response.ok){
        const answer = await response.json();
        dispatch(createAnswer(answer,questionId));
    };

    return response;
 
}


export const fetchEditAnswer =  (answer,answerId) => async (dispatch) => {
    let response;
    response = await fetch(`/api/answers/${answerId}`,
    {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answer)
      }
    );

    if(response.ok){
        const answer = await response.json();
        dispatch(editAnswer(answer));
    };

    return response;
}


export const fetchDeleteAnswer =  (answerId) => async (dispatch) => {
    let response;
    response = await fetch(`/api/answers/${answerId}`, {method: 'DELETE'});

    if(response.ok){
        const responseMessage = await response.json();
        console.log('MESSAGE', responseMessage)
        dispatch(deleteAnswer(answerId));
    };

    return response;
}


export const fetchCreateVote =  (answerId,voteDirection) => async (dispatch) => {
    let response;
    console.log(JSON.stringify({'voteDirection': voteDirection}));
    response = await fetch(`/api/answers/${answerId}/votes`,
    {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'voteDirection': voteDirection})
      }
    );

    if(response.ok){
        const answer = await response.json();
        dispatch(createVote(voteDirection));
    };

    return response;
}


export const fetchDeleteVote =  (voteId) => async (dispatch) => {
    let response;
    response = await fetch(`/api/votes/${voteId}`);

    if(response.ok){
        const answer = await response.json();
        dispatch(deleteVote(voteId));
    };

    return response;
}

/******** Reducer ********/
const initialState = {};

const answersReducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type){
        case GET_USER_ANSWERS:
            action.payload['Answers'].forEach(answer => {
                newState[answer.id] = answer});
            return newState;
        case CREATE_ANSWER:
            newState = {[action.payload.answer.id]: action.payload.answer }
            return newState;
        case EDIT_ANSWER:
            newState = action.payload
            return newState;
        case DELETE_ANSWER:
            delete newState[action.payload];
            return newState;
        case CREATE_VOTE:
            newState = action.payload
            return newState;
        case DELETE_VOTE:
            newState = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default answersReducer;
