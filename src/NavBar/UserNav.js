import { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import userContext from '../userContext';


function UserNav() {
    
    const { currentUser, logout } = useContext(userContext);
    
    return (
        <div className="Right-Links">
            <Route>
                <NavLink to="/companies">Companies</NavLink>
            </Route>
            <Route>
                <NavLink to="/jobs">Jobs</NavLink>
            </Route>
            <Route>
                <NavLink to="/profile">Profile</NavLink>
            </Route>
            <Route>
                <NavLink to="/" onClick={logout}>Log out, {currentUser.firstName}</NavLink>
            </Route>
        </div>
    )
}

export default UserNav;