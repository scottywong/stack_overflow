import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuestions } from '../../../store/questions';
import QuestionListItem from '../QuestionListItem';
import { Modal } from '../../../context/Modal';
import QuestionCreateForm from '../QuestionCreateForm';
import './QuestionList.css';

function QuestionList() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    const questions = Object.values(useSelector((state) => state.questions?.all_questions ? state.questions.all_questions : state.questions));
    
    useEffect(() => {
        dispatch(fetchAllQuestions()).catch(async (res) => {
            console.log('res = ', res)
            const data = await res.json();
            if (data && data.errors) setValidationErrors(data.errors);
        })
    }, [dispatch])

    return (
      <div className='ql-container'>
        <div className='ql-header'>
              <div className='question-nav-header'><h1>All Questions</h1></div>
              <button onClick={() => setShowModal(true)}>Ask Question</button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <QuestionCreateForm setShowModal={setShowModal} />
              </Modal>
            )}
        </div>
        <ul>
          {validationErrors &&
            validationErrors.map((error) => (
              <li className='errors' key={error}>
                {error}
              </li>
            ))}
        </ul>
          <div className='ql-list'>
            {questions.map((question) => (
              <div key={question?.id}>
                <div>
                  <QuestionListItem question={question} />
                </div>
              </div>
            ))}
          </div>
      </div>
    );
}

export default QuestionList;
