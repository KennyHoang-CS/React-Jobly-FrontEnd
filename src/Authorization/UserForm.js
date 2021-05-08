import '../css/Form.css';
import React, { useState, useContext } from 'react';
import userContext from '../Context/userContext';
import JoblyApi from '../API/api';
import { useHistory } from 'react-router-dom';

function UserForm() {
    
    const { register, currentUser, update } = useContext(userContext);

    // Initial state set to two different objects, if the user is signing up
    //  updating their profile information. 
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

    // The state to hold user form data. 
    const [userFormData, setUserFormData] = useState(INITIAL_STATE);
    // The state to handle the errors. 
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // The state to see if user is updating their profile. 
    const [hasUpdated, setHasUpdated] = useState(false);
    // Create a history object, so we can go back to home page via signing up / update. 
    const history = useHistory();

    // Needed to change the state of form data. 
    function handleChange(e) {
        const { name, value } = e.target;
        setUserFormData(userFormData => ({
            ...userFormData,
            [name]: value
        }))
    }

    // Handle form submission whether its signing up or updating profile. 
    async function handleSubmit(e) {
        e.preventDefault();
        if (!currentUser.username) {    // user is registering if username isnt found.
            register(userFormData);
            history.push('/');  
        }
        if (currentUser.username) { // user is updating their profile if username is found.
            
            // Create the user data object, and determine field inputs. 
            let data = {
                password: userFormData.password,
                firstName: userFormData.firstName || currentUser.firstName,
                lastName: userFormData.lastName || currentUser.lastName,
                email: userFormData.email || currentUser.email
            }
            
            // Validate the user password. 
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
        
        // Form will display either as: registering / updating profile
        // depending if the user is signed in or not. 

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