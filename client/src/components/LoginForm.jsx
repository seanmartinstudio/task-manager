import React from 'react'
import { useState } from "react";

const LoginForm = ( {onLogin, setShowLogin} ) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

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
        r.json().then((err) => setErrors(err.errors))
        setUsername("")
        setPassword("")
      }
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Login Page</h2>
  
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>

    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>

    <br></br>
    <button className="button">Login</button>

    <br></br>
    <button className="button" type="button" onClick={() => setShowLogin(false)}>New User? Sign Up Here</button>
    
    <br></br>
    <br></br>
    <ul>
    {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  </form>
)
}

export default LoginForm