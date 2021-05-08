import { NavLink } from "react-router-dom";

function GuestButtons() {
    return (
        <div className="Guest-Buttons">
            <NavLink exact to="/login">
                <button>Log in</button>
            </NavLink>
            <NavLink exact to="/signup">
                <button>Sign up</button>
            </NavLink>
        </div>
    )
}

export default GuestButtons;