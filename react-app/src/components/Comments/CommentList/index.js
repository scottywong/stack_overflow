import React, { useState, useEffect } from 'react';
import CommentListItem from '../CommentListItem';
import './CommentList.css'

function CommentList({commentList}) {

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
