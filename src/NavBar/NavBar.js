import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import "../css/Nav-Bar.css";
import GuestNav from './GuestNav';
import UserNav from './UserNav';
import userContext from '../Context/userContext';


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
                {!token && <GuestNav token={token} />}
                {token && <UserNav />}
            </div>
        </div>
    )
}

export default NavBar;