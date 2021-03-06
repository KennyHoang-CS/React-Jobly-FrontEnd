import { NavLink, Route } from 'react-router-dom';

/** Guest Users will only see these links until they login or sign up. */

function GuestNav() {
    return (
        <div className="Right-Links">
            <Route>
                <NavLink exact to="/login">Login</NavLink>
            </Route>
            <Route>
                <NavLink exact to="/signup">Sign Up</NavLink>
            </Route>
        </div>
    )
}

export default GuestNav;