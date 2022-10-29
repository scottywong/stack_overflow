import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AnswerListItem.css';


function AnswerListItem({answer}) {

    return (
        <div className='answerListItem-container'>
        <p>{answer?.body}</p>
        </div>
    ); 
}

export default AnswerListItem;