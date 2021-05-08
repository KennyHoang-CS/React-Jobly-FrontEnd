import React, { useState } from 'react';
import Home from './Home/Home';
import UserContext from './Context/userContext';
import JoblyApi from './API/api';
import { useHistory } from 'react-router-dom';
import useLocalStorageState from './hooks/useLocalStorageState';

function App() {

  const INITIAL_USER_STATE = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    isAdmin: false,
    applications: []
  }

  const [token, setToken] = useLocalStorageState("token", "");
  const [currentUser, setCurrentUser] = useLocalStorageState("currentUser", INITIAL_USER_STATE);
  const history = useHistory();

  const userFunctions = {
    register: register,
    login: login,
    logout: logout, 
    update: update,
    token: token,
    currentUser: currentUser
  }

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

  async function update(userData, token) {
    setToken(token);
    await JoblyApi.setToken(token);
    let updatedUser = await JoblyApi.updateUser(currentUser.username, userData);
    let newUser = {
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      applications: currentUser.applications
    }
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
