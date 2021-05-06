import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import "./css/Nav-Wrapper.css";
import GuestNav from './NavBar/GuestNav';
import UserNav from './NavBar/UserNav';
import userContext from './userContext';


function NavBar() {
    
    const { token } = useContext(userContext);
    
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