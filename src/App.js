import React from 'react';
import Home from './Home/Home';
import UserContext from './Context/userContext';
import JoblyApi from './API/api';
import { useHistory } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';

function App() {

  // State to hold current user data. 
  const INITIAL_USER_STATE = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: false,
    applications: []
  }

  // useLocalStorageState() is a custom hook to return useState() object. 
  // State to hold the token used throughout the app for user verification.
  const [token, setToken] = useLocalStorageState("token", "");
  // State to hold current user data. 
  const [currentUser, setCurrentUser] = useLocalStorageState("currentUser", INITIAL_USER_STATE);
  
  // History object used to go back to home page. 
  const history = useHistory();

  // List of user functions used throughout the entire app via useContext().
  const userFunctions = {
    register: register,
    login: login,
    logout: logout, 
    update: update,
    token: token,
    currentUser: currentUser
  }

  /** Handle user logins. */
  async function login(user, newToken) {
    
    if (newToken) {
      await JoblyApi.setToken(newToken);
      setToken(newToken);
  
      // store the current user data. 
      setCurrentUser(await JoblyApi.getUser(user.username));
    }

    // after user logs in, go back to home page. 
    history.push("/");
  }

  /** Handle user logouts. */
  async function logout() {
    await JoblyApi.setToken(token);
    setToken('');
    setCurrentUser(INITIAL_USER_STATE);
  }

  /** Handle user registers. */
  async function register(newUser) {
    setCurrentUser(newUser);
    let newToken = await JoblyApi.userRegister(newUser);
    setToken(newToken);
  }

  /** Handle user updates of their data */
  async function update(userData, token) {
    
    // updating requires the current user token, so make a copy in JoblyApi
    // and token state. JoblyApi uses token to talk to backend. 
    // Token state is used in frontend to talk with other requests. 
    setToken(token);
    await JoblyApi.setToken(token);
    
    // update the user. 
    let updatedUser = await JoblyApi.updateUser(currentUser.username, userData);
    
    // create new user out from the current user with their new updated data. 
    let newUser = {
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      applications: currentUser.applications
    }
    // set the currentUser state to hold the new user updated data and go back to home. 
    setCurrentUser(newUser);
    history.push('/');
  }

  return (
    <div>
      <UserContext.Provider value={userFunctions}>
        <Home /> 
      </UserContext.Provider> 
    </div>
  );
}

export default App;
