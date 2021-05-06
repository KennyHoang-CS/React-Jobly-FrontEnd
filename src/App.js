import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import UserContext from './userContext';
import JoblyApi from './API/api';
import { Redirect, Switch, useHistory } from 'react-router-dom';

function App() {

  const INITIAL_USER_STATE = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: false,
    applications: []
  }

  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState(INITIAL_USER_STATE);
  const history = useHistory();

  const userFunctions = {
    register: register,
    login: login,
    logout: logout, 
    token: token,
    currentUser: currentUser
  }

  async function login(user) {
    let newToken = await JoblyApi.userValidate(user);
    
    if (newToken) {
      await JoblyApi.setToken(newToken);
      setToken(newToken);
  
      // store the current user data. 
      setCurrentUser(await JoblyApi.getUser(user.username));
    }

    // after user logs in, go back to home page. 
    history.push("/")
  }

  async function logout() {
    await JoblyApi.setToken(token);
    setToken('');
    setCurrentUser(INITIAL_USER_STATE);
  }

  async function register(newUser) {
    setCurrentUser(newUser);
    let newToken = await JoblyApi.userRegister(newUser);
    setToken(newToken);
  }

  return (
    <div>
      <UserContext.Provider value={userFunctions}>
        <p>TOKEN IS: {token}</p>
        <p>Username is: {currentUser.email}</p>
        <Home /> 
      </UserContext.Provider> 
    </div>
  );
}

export default App;
