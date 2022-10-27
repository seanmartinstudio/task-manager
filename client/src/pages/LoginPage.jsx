import React from 'react'
import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
import SignupPage from './SignupPage';



const LoginPage = ( {onLogin} ) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [notSignedUp, setNotSignedUp] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        setNotSignedUp(true)
      }
    });
  }

  let notSignedUpMessage
  if(notSignedUp) {
    notSignedUpMessage = <p className="notSignedUpMessage">Not a current user...</p>
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Login Page</h2>
  
    <input type="text" id="username" name="username" placeholder="Username" onChange={handleUsernameChange} value={username}></input>

    <input type="text" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={password}></input>

    <br></br>
    <button className="button">Login</button>

    <br></br>
    {/* <Link to="/signup">
    <button className="button">New User? Sign Up Here</button>
    </Link> */}
{/* 
    <Link to="/">
    <button onClick={handleSignUpLink} className="button">onclic? Login Here</button>
    </Link> */}
    

    <br></br>
    {notSignedUpMessage}
  </form>
)
}

export default LoginPage