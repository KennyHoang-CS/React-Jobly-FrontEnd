import '../css/HomePage.css';
import React, { useContext } from 'react';
import GuestButtons from './GuestButtons';
import userContext from '../Context/userContext';

function HomePage() {
    
    const { token, currentUser } = useContext(userContext);

    return (
        <div className="Home-Container">
            <div className="Cover-Image" style={{ backgroundImage: "url(/logos/cover.jpg)"}}></div>
            <div className="Cover-Message">
                <h1>Jobly</h1>
                <h3>All the jobs in one, convenient place.</h3>
                {!token && <GuestButtons />}
                {token && <p>Welcome Back, {currentUser.firstName}!</p>}
            </div>
        </div>

    )
}

export default HomePage;