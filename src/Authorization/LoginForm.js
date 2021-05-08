import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../Context/userContext';
import JoblyApi from '../API/api';

function LoginForm() {
    
    // Initial state to hold login form default values. 
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    // The state to hold login form data: username and password. 
    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE);
    // The state to hold login form errors.    
    const [hasError, setHasError] = useState(false);
    // The state to hold our login error message. 
    const [errorMessage, setErrorMessage] = useState(''); 
    // To obtain login function from centralized app via useContext. 
    const { login } = useContext(userContext);

    // To change the state of login form data. 
    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(loginFormData => ({
            ...loginFormData,
            [name]: value
        }))
    }

    // To submit our login form data. 
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // Create the user object with login form data: username & password. 
            let user = {
                username: loginFormData.username,
                password: loginFormData.password
            }
            // Determine if user from login form data is valid. 
            let newToken = await JoblyApi.userValidate(user);
            login(loginFormData, newToken);
            setLoginFormData(INITIAL_STATE);
        } catch (err) { // user isn't valid, display the errors. 
            setHasError(true);
            setErrorMessage(err);
        }
        
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
                {hasError && <div className="alert-box danger">{errorMessage}</div>}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;