import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { fetchDeleteAnswer } from '../../../store/answers';
import CommentCreateForm from '../../Comments/CommentCreateForm.js';
import CommentList from '../../Comments/CommentList'
import AnswerEditForm from '../AnswerEditForm';
import './Answer.css'

function Answer({answer,refreshQuestion}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteAnswerModal, setDeleteAnswerModal] = useState(false);
    const [commentModal, setCommentModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const isOwner = sessionUser.id === answer?.userId;

    const dispatch = useDispatch();
    

    const handleDelete = async (e) => {
      e.preventDefault();     
      const choice = window.confirm("Are you sure you want to delete this answer?");
      if (!choice) return
      
      return dispatch(fetchDeleteAnswer(answer?.id))
      .then( refreshQuestion());
    }

    return (
      <div className='answer-container'>
        <p>{answer?.body}</p>

        {answer?.Comments && (
          <CommentList commentList={answer.Comments} refreshQuestion={refreshQuestion}></CommentList>
        )}
        <div className='answer-actions-container'>
          {isOwner && <button onClick={() => setShowEditModal(true)}>Edit Answer</button>}
          {showEditModal && (
            <Modal onClose={() => setShowEditModal(false)}>
              <AnswerEditForm setShowEditModal={setShowEditModal} answer={answer} refreshQuestion={refreshQuestion} />
            </Modal>
          )}
          {isOwner && <button onClick={handleDelete} >Delete Answer</button>}
        </div>
        <div>
          <button onClick={() => setCommentModal(true)}>Post Comment</button>
            {commentModal && (
              <Modal onClose={() => setCommentModal(false)}>
                <CommentCreateForm setCommentModal={setCommentModal} answerId={answer?.id} refreshQuestion={refreshQuestion} />
               
              </Modal>
            )}
        </div>
      </div>
    );

}

export default Answer;
