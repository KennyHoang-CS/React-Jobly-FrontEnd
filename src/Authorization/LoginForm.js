import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../Context/userContext';
import JoblyApi from '../API/api';

function LoginForm() {
    
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE);   
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 
    const { login } = useContext(userContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(loginFormData => ({
            ...loginFormData,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            let user = {
                username: loginFormData.username,
                password: loginFormData.password
            }
            let newToken = await JoblyApi.userValidate(user);
            login(loginFormData, newToken);
            setLoginFormData(INITIAL_STATE);
        } catch (err) {
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