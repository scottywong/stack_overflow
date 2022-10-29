import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { Modal } from '../../../context/Modal';
import { fetchDeleteQuestions } from '../../../store/questions';
import QuestionEditForm from '../QuestionEditForm';
import AnswerCreateForm from '../../Answers/AnswerCreateForm';
import './Question.css';
import QuestionDelete from '../QuestionDelete';

function Question({ question, refreshQuestion }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user); 
  const isOwner = sessionUser.id === question?.userId;
   

  // const handleDelete = async (e) => {
  //   e.preventDefault();     
  //   const choice = window.confirm("Are you sure you want to delete this question?");
  //   if (!choice) return
    
  //   return dispatch(fetchDeleteQuestions(question?.id))
  //   .then( refreshQuestion()).then(history.push('/home'));
  // }


  return (
    <div className='q-container'>
      <h4>{question?.title}</h4>
      <p>{question?.body}</p>
      <div className='q-actions-container'>
        {isOwner && <button onClick={() => setShowEditModal(true)}>Edit Question</button>}
        {showEditModal && (
          <Modal onClose={() => setShowEditModal(false)}>
            <QuestionEditForm setShowEditModal={setShowEditModal} />
          </Modal>
        )}
        {isOwner && <button onClick={() => setShowDeleteModal(true)}>Delete Question</button> }
        {showDeleteModal && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <QuestionDelete setShowDeleteModal={setShowDeleteModal} questionId={question?.id} refreshQuestion={refreshQuestion}/>
          </Modal>
        )}
        <button onClick={() => setShowAnswerModal(true)}>Post Answer</button>
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
