import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetComments } from '../../../store/comments';
import CommentListItem from '../CommentListItem';
import './CommentList.css'

function CommentList({answerId}) {

const dispatch = useDispatch();
const commentList = Object.values(useSelector(state => state.comments));

useEffect(() => {
    dispatch(fetchGetComments(answerId));
  }, [dispatch])

    return (
        <div className="cl-container"> 
        { commentList && 
        commentList.map(comment => {
            return <CommentListItem comment={comment}></CommentListItem>
        })} 

        </div>
    )

}

export default CommentList;
