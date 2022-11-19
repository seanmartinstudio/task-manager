import React from 'react'
import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


const SignupForm = ( {onLogin, setShowLogin} ) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [errors, setErrors] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, title }),
        }).then((r) => {
          if (r.ok) {
            // If response.ok, send user to Login Page.
            r.json().then(() => setShowLogin(true))
          } else {
            r.json().then((err) => setErrors(err.errors))
            setUsername("")
            setPassword("")
            setTitle("")
          }
        });
      }

   return (

    <form onSubmit={handleFormSubmit}>
    <h2>Signup Page</h2>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
    <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={(event) => setTitle(event.target.value)} value={title}></input>
    <br></br>
    <button className="button">Sign Up</button>
    <br></br>
    <button className="button" type="button" onClick={() => setShowLogin(true)}>Already a user? Log In Here</button>
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

export default SignupForm