import React, { useState, useEffect } from 'react';
import CommentListItem from '../CommentListItem';
import './CommentList.css'

function CommentList({commentList}) {

    return (
        <div className="commentList-container"> 
        { commentList && 
        commentList.map(comment => {
            return <CommentListItem commentListItem={comment}></CommentListItem>
        })} 
        </div>
    )

}

export default CommentList;
