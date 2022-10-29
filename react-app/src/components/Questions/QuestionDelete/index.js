import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchDeleteQuestions } from '../../../store/questions';

function QuestionDelete({ setShowDeleteModal, questionId, refreshQuestion }) {
    const dispatch = useDispatch();
    const history = useHistory()

    const [errors, setErrors] = useState([]);

    const onDelete = () => {
        dispatch(fetchDeleteQuestions(questionId))
        .then(() => setShowDeleteModal(false))
        .then(() => history.push('/profile'))
            .catch(async (res) => {
                const data = await res.json()
                if(data && data.errors) setErrors(data.errors)
            })
    };

    return (
        <div>
            <ul>
                {errors && errors.map(error => 
                    <li key={error}>{error}</li>
                )}
            </ul>
            <p>Are you sure you want to delete this question?</p>
            <button onClick={() => onDelete()}>Delete</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
        </div>
    );
}

export default QuestionDelete;
