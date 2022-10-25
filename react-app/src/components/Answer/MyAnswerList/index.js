import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnswerListItem from '../AnswerListItem';
import { fetchGetUserAnswers } from '../../../store/answers';
// import './MyAnswerList.css';

function MyAnswerList() {

    const dispatch = useDispatch();
    // const myAnswers = useSelector(state => state.answers);

    const myAnswers = 
        [
            {
                "id": 1,
                "userId": 1,
                "questionId":1,
                "body": "Sample Body",
                "created_on":  "2022-12-12", 
                "last_update_on": "2022-12-12"
            },
            {
                "id": 2,
                "userId": 1,
                "questionId":1,
                "body": "Sample Body",
                "created_on":  "2022-12-12", 
                "last_update_on": "2022-12-12"
            }
        ];
     
    useEffect(() => {
        dispatch(fetchGetUserAnswers());
    },[dispatch]);

    return (
        <div className="myAnswerList-container">
             {console.log(myAnswers)} 
        { myAnswers && 
        myAnswers.map(answer => {
            return <AnswerListItem answer={answer}> </AnswerListItem>
        })} 
        </div>
    )

}

export default MyAnswerList;
