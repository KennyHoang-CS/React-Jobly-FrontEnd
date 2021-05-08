import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../Context/userContext';
import JoblyApi from '../API/api';
import { useHistory } from 'react-router-dom';

function UserForm() {
    
    const { register, currentUser, update } = useContext(userContext);

    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    } ? currentUser.username : {
        password: '',
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    }

    const [userFormData, setUserFormData] = useState(INITIAL_STATE);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [hasUpdated, setHasUpdated] = useState(false);
    const history = useHistory();

    function handleChange(e) {
        const { name, value } = e.target;
        setUserFormData(userFormData => ({
            ...userFormData,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!currentUser.username) {
            register(userFormData);
            history.push('/');
        }
        if (currentUser.username) {
            let data = {
                password: userFormData.password,
                firstName: userFormData.firstName || currentUser.firstName,
                lastName: userFormData.lastName || currentUser.lastName,
                email: userFormData.email || currentUser.email
            }
            
            try{   
                let userToken = await JoblyApi.userValidate({username: currentUser.username, password: data.password});
    
                // check the password before updating... 
                if (userToken) {
                    update(data, userToken);
                    setHasUpdated(true);
                    setHasError(false);
                } 
            } catch (err) {
                setHasError(true);
                setHasUpdated(false);
                setErrorMessage(err);
            }
        }
    }

    return (
        <div className="Form-Container">
            {!currentUser.username && <h1>Sign Up</h1>}
            {currentUser.username && <h1>Profile</h1>}
            <form className="Form" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    
                    <label htmlFor="username">Username</label>
                    {!currentUser.username && 
                        <input className="input"
                            id="username"
                            name="username"
                            type="text"
                            value={userFormData.username} 
                            onChange={handleChange}
                        />
                    }
                    {currentUser.username && <p>{currentUser.username}</p>}
                    
                    <label htmlFor="password">
                        {currentUser.username && <span>Confirm Password</span>}
                        {!currentUser.username && <span>Password</span>}
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={userFormData.password}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="fname">First Name</label>
                    <input
                        id="fname"
                        name="firstName"
                        type="text"
                        value={userFormData.firstName}
                        placeholder={currentUser.firstName || ''}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="lname">Last Name</label>
                    <input
                        id="lname"
                        name="lastName"
                        type="text"
                        value={userFormData.lastName}
                        placeholder={currentUser.lastName || ''}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={userFormData.email}
                        placeholder={currentUser.email || ''}
                        onChange={handleChange}
                    />
                </div>
                {hasError && <div className="alert-box danger">{errorMessage}</div>}
                {hasUpdated && <div className="alert-box success">Updated Successfully.</div>}
                {!currentUser.username && <button>Submit</button>}
                {currentUser.username && <button className="Save-Changes-Btn">Save Changes</button>}
            </form>
        </div>
    )
}

export default UserForm;