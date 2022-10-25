import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnswerListItem from '../AnswerListItem';
import { fetchGetUserAnswers } from '../../../store/answers';
import './MyAnswerList.css'

function MyAnswerList() {

    const dispatch = useDispatch();
    const myAnswers = useSelector(state => state.answers);

    //useEffect
    // useEffect(() => {
    //     dispatch(fetchGetUserAnswers());
    // },[dispatch]);

    return (
        <div className="MyAnswerList-container">
            {/* {console.log(myAnswers)} */}
        {/* { myAnswers && 
        myAnswers.map(answer => {
            return <AnswerListItem answer={answer}> </AnswerListItem>
        })} */}
        </div>
    )

}

export default MyAnswerList;