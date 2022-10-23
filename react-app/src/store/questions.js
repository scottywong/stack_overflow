// ******** Question Constants ********
const GET_QUESTIONS = 'questions/get';
const GET_QUESTION = 'questions/get';
const CREATE_QUESTIONS = 'questions/create';
const EDIT_QUESTIONS = 'questions/edit';
const DELETE_QUESTIONS = 'questions/delete';

// ******** Questions Actions ********

// GET Questions
export const getQuestions = (question) => {
    return {
        type: GET_QUESTIONS,
        payload: question
    };
};

// GET One Question
export const getQuestion = (question) => {
    return {
        type: CREATE_QUESTION,
        payload: question
    };
};

// EDIT (PUT) Questions
export const editQuestions = (question) => {
    return {
        type: EDIT_QUESTIONS,
        payload: question
    };
};

// DELETE Questions
export const deleteQuestions = (id) => {
    return {
        type: DELETE_QUESTIONS,
        payload: id
    };
};

// ******** Question THUNKS ********

// GET all Questions thunk
export const fetchQuestions = () => async (dispatch) => {
    const res = await fetch(`/api/questions`);

    if (res.ok){
        const questions = await res.json();
        dispatch(getQuestions(questions));
        return questions
    };
    return res;
};

// GET one Question thunk
export const fetchQuestion = (questionId) => async (dispatch) => {
    const res = await fetch(`api/questions/${questionId}`);

    if (res.ok){
        const question = await res.json();
        dispatch(getQuestion(question));
        return question;
    };
    return res;
};

// CREATE Questions thunk
export const fetchCreateQuestions = (question) => async (dispatch) => {
    const res = await fetch(`api/questions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question)
    });

    if (res.ok){
        const question = await res.json();
        dispatch(createQuestion(question));
        return question;
    };
    return res;
};

// EDIT (PUT) Questions thunk
export const fetchEditQuestions = (question) => async (dispatch) => {
    const res = await fetch(`api/questions/${question.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question)
    });

    if (res.ok){
        const question = await res.json();
        dispatch(editQuestions(question));
        return question;
    };
    return res;
};

// DELETE Questions thunk
export const fetchDeleteQuestions = (questionId) => async (dispatch) => {
    const res = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE'
    });

    if (res.ok){
        const question = await res.json();
        dispatch(deleteQuestions(question));
        return question;
    };
    return res;
};

// ******** REDUCER ********
const initialState = {}

const questionReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_QUESTIONS:
            action.payload.forEach(question => newState[question.id] = question)
            return newState;
        case GET_QUESTION:
            newState = action.payload;
            return newState;
        case CREATE_QUESTIONS:
            newState = { ...state, [action.payload.id]: action.payload }
            return newState;
        case EDIT_QUESTIONS:
            newState = action.payload;
            return newState;
        case DELETE_QUESTIONS:
            delete newState[action.payload];
            return newState
        default:
            return newState;
    };
};

export default questionReducer;
