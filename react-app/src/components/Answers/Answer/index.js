import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { fetchDeleteAnswer } from '../../../store/answers';
import CommentCreateForm from '../../Comments/CommentCreateForm.js/index.js';
import CommentList from '../../Comments/CommentList'
import AnswerEditForm from '../AnswerEditForm';
import Votes from '../../Votes';
import './Answer.css'
import AnswerDelete from '../AnswerDelete/index.js';

function Answer({answer,refreshQuestion}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteAnswerModal, setDeleteAnswerModal] = useState(false);
    const [commentModal, setCommentModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const isOwner = sessionUser.id === answer?.userId;
    
    return (
      <div className='answer-container'>
        <div className='answer-detail'>
          <Votes answer={answer} refreshQuestion={refreshQuestion} />
          <p>{answer?.body}</p>
        </div>
        <div className='answer-actions-container'>
          {isOwner && (
            <button onClick={() => setShowEditModal(true)}>Edit Answer</button>
          )}
          {showEditModal && (
            <Modal onClose={() => setShowEditModal(false)}>
              <AnswerEditForm
                setShowEditModal={setShowEditModal}
                answer={answer}
                refreshQuestion={refreshQuestion}
              />
            </Modal>
          )}
          {isOwner && (
            <button onClick={() => setDeleteAnswerModal(true)}>
              Delete Answer
            </button>
          )}
          {deleteAnswerModal && (
            <Modal onClose={() => setDeleteAnswerModal(false)}>
              <AnswerDelete
                answerId={answer?.id}
                setDeleteAnswerModal={setDeleteAnswerModal}
                refreshQuestion={refreshQuestion}
              />
            </Modal>
          )}
        </div>

       <div className='answer-commentlist'>
          {answer?.Comments && (
            <CommentList
              commentList={answer.Comments}
              refreshQuestion={refreshQuestion}
            ></CommentList>
          )}
        </div>
        <div>
          <button onClick={() => setCommentModal(true)}>Post Comment</button>
          {commentModal && (
            <Modal onClose={() => setCommentModal(false)}>
              <CommentCreateForm
                setCommentModal={setCommentModal}
                answerId={answer?.id}
                refreshQuestion={refreshQuestion}
              />
            </Modal>
          )}
        </div>
      </div>
    );

}

export default Answer;
