import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../userContext';

function LoginForm() {
    
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE);    
    const { login } = useContext(userContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(loginFormData => ({
            ...loginFormData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(loginFormData);
        setLoginFormData(INITIAL_STATE);
    }

    return (
        <div className="Form-Container">
            <h1>Log in</h1>
            <form className="Form" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <label>Username</label>
                    <input className="input"
                        id="username"
                        name="username"
                        type="text"
                        value={loginFormData.username}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={loginFormData.password}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;