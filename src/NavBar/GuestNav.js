import { NavLink, Route } from 'react-router-dom';

function GuestNav() {
    return (
        <div className="Right-Links">
            <Route>
                <NavLink to="/login">Login</NavLink>
            </Route>
            <Route>
                <NavLink to="/signup">Sign Up</NavLink>
            </Route>
        </div>
    )
}

export default GuestNav;