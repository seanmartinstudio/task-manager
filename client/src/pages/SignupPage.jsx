import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

const SignupPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [title, setTitle] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
        console.log(password)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }

    const handlePasswordConfirmationChange = (event) => {
        setPasswordConfirmation(event.target.value)
        console.log(passwordConfirmation)
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(username, password, passwordConfirmation, title)
      }
    

   return (
    <form onSubmit={handleFormSubmit}>
    <h2>Signup Page</h2>
 
    <input type="text" id="username" name="username" placeholder="Username" onChange={handleUsernameChange} value={username}></input>

    <input type="text" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={password}></input>

    <input type="text" id="password confirmation" name="passwordConfirmation" placeholder="Password Confirmation" onChange={handlePasswordConfirmationChange} value={passwordConfirmation}></input>

    <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleTitleChange} value={title}></input>

    <br></br>
    <button className="button">Sign Up</button>

    <br></br>
    <Link to="/">
    <button className="button">Already a user? Login Here</button>
    </Link>
  </form>
  )
}

export default SignupPage