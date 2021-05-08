import { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import userContext from '../Context/userContext';

/** User will see new links when logged in or registered. */

function UserNav() {
    
    const { currentUser, logout } = useContext(userContext);
    
    return (
        <div className="Right-Links">
            <span className="User-Nav-Links">
                <Route>
                    <NavLink exact to="/companies">Companies</NavLink>
                </Route>
                <Route>
                    <NavLink exact to="/jobs">Jobs</NavLink>
                </Route>
                <Route>
                    <NavLink exact to="/profile">Profile</NavLink>
                </Route>
            </span>
            <Route>
                <NavLink to="/" className="Log-Out-Link" onClick={logout}>Log out, {currentUser.username}</NavLink>
            </Route>
        </div>
    )
}

export default UserNav;