import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnswerListItem from '../AnswerListItem';
import { fetchGetUserAnswers } from '../../../store/answers';
import './MyAnswerList.css';

function MyAnswerList() {

    const dispatch = useDispatch();
    const myAnswers = Object.values(useSelector(state => state.answers));
    const sessionUser = useSelector((state) => state.session.user);

    console.log('User Id',sessionUser.id)
    const [isLoaded,SetIsLoaded] = useState(false);

     
    useEffect(() => {
        dispatch(fetchGetUserAnswers())
        .then(() => console.log('myANSWERS: ', myAnswers))
        .then(SetIsLoaded(true));
    },[dispatch]);

    return (
        <div className="my-al-container">
            <div className="my-al-header">
                <h2>My Answers</h2>
            </div>
            { myAnswers && isLoaded && 
                myAnswers.map(answer => {
                    if(sessionUser.id === answer.userId){
                        return <AnswerListItem answer={answer}> </AnswerListItem>
                    }
            })} 
        </div>
    )

}

export default MyAnswerList;
