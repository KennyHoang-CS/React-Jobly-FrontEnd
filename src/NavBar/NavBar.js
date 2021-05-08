import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import "../css/Nav-Bar.css";
import GuestNav from './GuestNav';
import UserNav from './UserNav';


function NavBar() {
    
    // token is used to determine if user is logged in or not. 
    return (
        <div className="Nav-Bar">
            <div className="Nav-Wrapper">
                <div className="Left-Links">
                    <Route>
                        <NavLink to="/">Jobly</NavLink>
                    </Route>
                </div>
                {!token && <GuestNav />}   
                {token && <UserNav />}
            </div>
        </div>
    )
}

export default NavBar;