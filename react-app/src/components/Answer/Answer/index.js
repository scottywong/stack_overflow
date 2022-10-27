import React, { useState, useEffect } from 'react';
import { Modal } from '../../../context/Modal';
import CommentList from '../../Comments/CommentList'
import AnswerEditForm from '../AnswerEditForm';
import './Answer.css'

function Answer({answer}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteAnswerModal, setDeleteAnswerModal] = useState(false);
    const [commentModal, setCommentModal] = useState(false);

    return (
        <div className="answer-container">
            <p>{answer?.body}</p>

            {answer?.Comments && 

                <CommentList commentList={answer.Comments}></CommentList>
            } 
            <div className='answer-actions-container'>
                <button onClick={() => setShowEditModal(true)}>Edit Answer</button>
                {showEditModal && (
                    <Modal onClose={() => setShowEditModal(false)}>
                        <AnswerEditForm setShowEditModal={setShowEditModal}/>
                    </Modal>
                )}
                <button>Delete Answer</button>
            </div>
            <div>
                <button>Post Comment</button>
            </div>
        </div>
    )

}

export default Answer;
