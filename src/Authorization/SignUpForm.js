import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../userContext';

function SignUpForm() {
    
    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
    
    const [signUpFormData, setSignUpFormData] = useState(INITIAL_STATE);
    const { register } = useContext(userContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setSignUpFormData(signUpFormData => ({
            ...signUpFormData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        register(signUpFormData);
    }


    return (
        <div className="Form-Container">
            <h1>Sign Up</h1>
            <form className="Form" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <label htmlFor="username">Username</label>
                    <input className="input"
                        id="username"
                        name="username"
                        type="text"
                        value={signUpFormData.username} 
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={signUpFormData.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="fname">First Name</label>
                    <input
                        id="fname"
                        name="firstName"
                        type="text"
                        value={signUpFormData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input
                        id="lname"
                        name="lastName"
                        type="text"
                        value={signUpFormData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="fname">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={signUpFormData.email}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;