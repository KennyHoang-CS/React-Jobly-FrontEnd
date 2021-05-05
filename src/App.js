import React, { useState } from 'react';
import Home from './Home';

function App() {

  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  
  function login() {
    alert('YOU WANT LOGIN???')
  }

  function logout() {

  }

  function signup() {
    alert("YOU WANT SIGNUP???")
  }

  return (
    <div>
      <Home login={login} signup={signup}/>  
    </div>
  );
}

export default App;
