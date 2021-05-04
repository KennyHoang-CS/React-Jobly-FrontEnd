import './css/GuestPage.css';
import React from 'react';

function GuestPage() {
    return (
        <div className="Guest-Message">
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            <div className="Guest-Buttons">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </div>

    )
}

export default GuestPage;