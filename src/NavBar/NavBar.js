import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import userContext from '../Context/userContext';
import "../css/Nav-Bar.css";
import GuestNav from './GuestNav';
import UserNav from './UserNav';


function NavBar() {
    
    // token is used to determine if user is logged in or not. 
    const { token } = useContext(userContext);

    return (
        <div className="Nav-Bar">
            <div className="Nav-Wrapper">
                <div className="Left-Links">
                    <Route>
                        <NavLink exact to="/">Jobly</NavLink>
                    </Route>
                </div>
                {!token && <GuestNav />}   
                {token && <UserNav />}
            </div>
        </div>
    )
}

export default NavBar;