import { NavLink, Route } from 'react-router-dom';
import "./css/Nav-Wrapper.css";

function NavBar() {
    return (
        <div className="Nav-Bar">
            <div className="Nav-Wrapper">
                <div className="Left-Links">
                    <Route>
                        <NavLink to="/">Jobly</NavLink>
                    </Route>
                </div>
                <div className="Right-Links">
                    <Route>
                        <NavLink to="/login">Login</NavLink>
                    </Route>
                    <Route>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default NavBar;