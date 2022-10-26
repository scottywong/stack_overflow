import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuestions } from '../../../store/questions';
import { NavLink } from 'react-router-dom';
// import './QuestionList.css';

function QuestionList() {
    const dispatch = useDispatch();
    const [validationErrors, setValidationErrors] = useState([]);

    const questions = Object.values(useSelector((state) => state.questions?.all_questions ? state.questions.all_questions : state.questions));
    
    useEffect(() => {
        dispatch(fetchAllQuestions()).catch(async (res) => {
            // console.log('res = ', res)
            // const data = await res.json();
            // if (data && data.errors) setValidationErrors(data.errors);
        })
    }, [dispatch])

    return (
        <div>
            <div>List of questions</div>
            <ul>
                {validationErrors && validationErrors.map(error => (
                    <li className='errors' key={error}>{error}</li>
                ))}
            </ul>
            <div>
                {questions.map(question => (
                    <div key={question.id}>
                        {/* <NavLink> */}
                            <div>
                                {question.title}
                                {question.body}
                            </div>
                        {/* </NavLink> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionList;
