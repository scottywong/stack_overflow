import React, { useState, useEffect } from 'react';
import './CommentListItem.css'

function CommentListItem({comment}) {

    return (
        <div className="commentListItem-container">
        <p>{comment.body}</p>
        </div>
    )
}

export default CommentListItem;