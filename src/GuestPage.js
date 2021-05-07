import './css/GuestPage.css';
import React, { useContext } from 'react';
import GuestButtons from './GuestButtons';
import userContext from './userContext';

function GuestPage() {
    
    const { token, currentUser } = useContext(userContext);

    return (
        <div className="Guest-Message">
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            {!token && <GuestButtons />}
            {token && <p>Welcome Back, {currentUser.firstName}!</p>}
        </div>

    )
}

export default GuestPage;