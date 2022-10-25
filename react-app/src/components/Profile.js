import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyAnswerList from './Answer/MyAnswerList';
import NavBar from './NavBar';

function Profile() {
    
    return (
        <div className='Profile-Container'>

            <MyAnswerList/>

        
        </div>

    )

}

export default Profile;