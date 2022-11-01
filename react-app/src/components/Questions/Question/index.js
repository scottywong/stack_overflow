import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { Modal } from '../../../context/Modal';
import { fetchDeleteQuestions } from '../../../store/questions';
import QuestionEditForm from '../QuestionEditForm';
import AnswerCreateForm from '../../Answers/AnswerCreateForm';
import QuestionDelete from '../QuestionDelete';
import './Question.css';

function Question({ question, refreshQuestion }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const sessionUser = useSelector(state => state.session.user); 
  const isOwner = sessionUser.id === question?.userId;

  return (
    <div className='q-container'>
      <div className='q-detail'>
        <h4>{question?.title}</h4>
        <p>{question?.body}</p>
      </div>
      <div className='q-bottom'>
        <div className='q-actions-container'>
          {isOwner && <button className="link link-button" onClick={() => setShowEditModal(true)}>Edit </button>}
          {showEditModal && (
            <Modal onClose={() => setShowEditModal(false)}>
              <QuestionEditForm setShowEditModal={setShowEditModal} question={question} refreshQuestion={refreshQuestion}/>
            </Modal>
          )}
          {isOwner && <button  className="link link-button" onClick={() => setShowDeleteModal(true)}>Delete</button> }
          {showDeleteModal && (
            <Modal onClose={() => setShowDeleteModal(false)}>
              <QuestionDelete setShowDeleteModal={setShowDeleteModal} questionId={question?.id} refreshQuestion={refreshQuestion}/>
            </Modal>
          )}

          </div>
          <div className='q-posted-by'>Posted by: {question?.username}</div>
        </div>
        <div className='postAnswer'>
        {!isOwner && <button onClick={() => setShowAnswerModal(true)}>Post Your Answer</button>}
          {showAnswerModal && (
            <Modal onClose={() => setShowAnswerModal(false)}>
              <AnswerCreateForm setShowAnswerModal={setShowAnswerModal} refreshQuestion={refreshQuestion} />
            </Modal>  
          )}
        </div>
      </div>

  );
}

export default Question;
