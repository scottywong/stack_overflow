import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import CommentDelete from '../CommentDelete/';
import { fetchQuestion } from '../../../store/questions';

import './CommentListItem.css'

function CommentListItem({comment,refreshQuestion}) {

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user)
    const isOwner = sessionUser.id === comment?.userId

    return (
        <div className="cli-container">
        <div className='cli-detail'>
        <p>{comment?.body} - {comment?.username}</p>
        </div>
        <div className="cli-actions-container">
            {isOwner && <button className='link link-button' onClick={() => setShowDeleteModal(true)}>Delete</button>}
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                    <CommentDelete commentId={comment?.id} setShowDeleteModal={setShowDeleteModal} refreshQuestion={refreshQuestion} />
                </Modal>
            )}
        </div>
          

        </div>
    )
}

export default CommentListItem;
