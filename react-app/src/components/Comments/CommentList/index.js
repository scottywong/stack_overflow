import React, { useState, useEffect } from 'react';
import CommentListItem from '../CommentListItem';
import './CommentList.css'

function CommentList({commentList, refreshQuestion}) {

    return (
        <div className="cl-container"> 
        { commentList && 
        commentList.map(comment => {
            return <CommentListItem comment={comment} refreshQuestion={refreshQuestion} ></CommentListItem>
        })} 

        </div>
    )

}

export default CommentList;
