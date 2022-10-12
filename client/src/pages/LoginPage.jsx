import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'


const LoginPage = () => {

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(username, password)
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Login Page</h2>
  
    <input type="text" id="username" name="username" placeholder="Username" onChange={handleUsernameChange} value={username}></input>

    <input type="text" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={password}></input>

    <br></br>
    <button class="button">Login</button>

    <br></br>
    <Link to="/signup">
    <button class="button">New User? Sign Up Here</button>
    </Link>
  </form>
)
}

export default LoginPage