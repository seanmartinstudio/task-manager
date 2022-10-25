import React from 'react'
import axios from 'axios'
import { Link, useNavigate  } from 'react-router-dom'
import { useState } from "react";

const SignupPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [passwordTaken, setPasswordTaken] = useState(false)
    const navigate = useNavigate()


    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/signup", {
            username,
            password,
            title
          })
          .then(function (response) {
            console.log(response.status)
            if(response.status >= 200 || response.status <= 299) {
              navigate('/')
            }
          })
          .catch(function (error) {
            if(error.response.status === 422)
            setPasswordTaken(true)
            setUsername("")
            setPassword("")
            setTitle("")
          });
      }

      //Renders a message to the page if password is unavailable
      let passwordTakenMessage
      if(passwordTaken) {
        passwordTakenMessage = <p className="passwordTakenMessage">Password Taken...</p>
      }


   return (

    <form onSubmit={handleFormSubmit}>
    <h2>Signup Page</h2>
 
    <input type="text" id="username" name="username" placeholder="Username" onChange={handleUsernameChange} value={username}></input>

    <input type="text" id="password" name="password" placeholder="Password" onChange={handlePasswordChange} value={password}></input>

    <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title" onChange={handleTitleChange} value={title}></input>

    <br></br>
    <button className="button">Sign Up</button>

    <br></br>
    <Link to="/">
    <button className="button">Already a user? Login Here</button>
    </Link>

    <br></br>
    {passwordTakenMessage}
  </form>
  )
}

export default SignupPage

//Need to render info to the page if error occuers due to username already exhisting