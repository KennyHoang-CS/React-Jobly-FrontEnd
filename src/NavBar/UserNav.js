import { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import userContext from '../Context/userContext';


function UserNav() {
    
    const { currentUser, logout } = useContext(userContext);
    
    return (
        <div className="Right-Links">
            <span className="User-Nav-Links">
                <Route>
                    <NavLink to="/companies">Companies</NavLink>
                </Route>
                <Route>
                    <NavLink to="/jobs">Jobs</NavLink>
                </Route>
                <Route>
                    <NavLink to="/profile">Profile</NavLink>
                </Route>
                </span>
            <Route>
                <NavLink to="/" className="Log-Out" onClick={logout}>Log out, {currentUser.username}</NavLink>
            </Route>
        </div>
    )
}

export default UserNav;