import './css/GuestPage.css';
import React, { useContext } from 'react';
import GuestButtons from './GuestButtons';
import userContext from './userContext';

function GuestPage() {
    
    const { currentUser } = useContext(userContext);

    return (
        <div className="Guest-Message">
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            {!currentUser.username && <GuestButtons />}
            {currentUser.username && <p>Welcome Back, {currentUser.username}!</p>}
        </div>

    )
}

export default GuestPage;