import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteComments, fetchGetComments } from '../../../store/comments';

import './CommentListItem.css'

function CommentListItem({comment}) {

    const dispatch = useDispatch();

    useEffect(()=> {

    },[dispatch])
    
    const handleOnClick = async (e) => {
        e.preventDefault();     
        const choice = window.confirm("Are you sure you want to delete this comment?");
        if (!choice) return
        return dispatch(fetchDeleteComments(comment?.id));
    }

    return (
        <div className="cli-container">
            <p>{comment?.body}</p>
            <button onClick={handleOnClick}> Delete Comment </button>
        </div>
    )
}

export default CommentListItem;
