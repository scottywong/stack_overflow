import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyAnswerList from '../Answer/MyAnswerList';
import MyQuestionList from '../Questions/MyQuestionList'
import './Profile.css';

const Profile = () => {
    
    return (
        <div className='profile-Container'>
            
            <MyQuestionList/>
            <MyAnswerList/>

        </div>

    )

}

export default Profile;