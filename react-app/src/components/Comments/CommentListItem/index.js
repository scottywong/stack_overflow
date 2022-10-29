import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteComment } from '../../../store/comments';
import { fetchQuestion } from '../../../store/questions';

import './CommentListItem.css'

function CommentListItem({comment,refreshQuestion}) {

    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();     
        const choice = window.confirm("Are you sure you want to delete this comment?");
        if (!choice) return
        
        return dispatch(fetchDeleteComment(comment?.id))
        .then(refreshQuestion())
        .then(refreshQuestion()); //double refresh to ensure changes are reflected on Question
    }

    return (
        <div className="cli-container">
            <p>{comment?.body}</p>
            <button onClick={handleDelete}>Delete Comment</button>
        </div>
    )
}

export default CommentListItem;
