import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import QuestionEditForm from '../QuestionEditForm';
import AnswerCreateForm from '../../Answer/AnswerCreateForm';
import './Question.css';

function Question({ question }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  return (
    <div className='q-container'>
      <h4>{question?.title}</h4>
      <p>{question?.body}</p>
      <div className='q-actions-container'>
        <button onClick={() => setShowEditModal(true)}>Edit Question</button>
        {showEditModal && (
          <Modal onClose={() => setShowEditModal(false)}>
            <QuestionEditForm setShowEditModal={setShowEditModal} />
          </Modal>
        )}
        <button>Delete Question</button>
        <button onClick={() => setShowAnswerModal(true)}>Post Answer</button>
        {showAnswerModal && (
          <Modal onClose={() => setShowAnswerModal(false)}>
            <AnswerCreateForm setShowAnswerModal={setShowAnswerModal} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Question;
