import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyAnswerList from '../Answers/MyAnswerList';
import MyQuestionList from '../Questions/MyQuestionList'
import './Profile.css';

const Profile = () => {
    
    return (
        <div className='profile-container'>
            
            <MyQuestionList/>
            <MyAnswerList/>

        </div>

    )

}

export default Profile;
