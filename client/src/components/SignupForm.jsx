import React from 'react'
import { useState } from "react";

const SignupForm = ( {onLogin, setShowLogin} ) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [passwordTaken, setPasswordTaken] = useState(false)

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
            r.json().then((user) => onLogin(user))
          } else {
            setPasswordTaken(true)
            setUsername("")
            setPassword("")
            setTitle("")
          }
        });
      }

      //Renders a message to the page if password is unavailable
      let passwordTakenMessage
      if(passwordTaken) {
        passwordTakenMessage = <p className="passwordTakenMessage">Username taken...</p>
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
    {passwordTakenMessage}
  </form>
  )
  
}

export default SignupForm