import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <form>
    <h2>Signup Page</h2>
 
    <input type="text" id="username" name="username" placeholder="Username"></input>

    <input type="text" id="password" name="password" placeholder="Password"></input>

    <input type="text" id="password confirmation" name="passwordConfirmation" placeholder="Password Confirmation"></input>

    <input type="text" id="jobTitle" name="jobTitle" placeholder="Job Title"></input>

    <br></br>
    <button class="button">Sign Up</button>

    <br></br>
    <Link to="/">
    <button class="button">Already a user? Login Here</button>
    </Link>

  </form>
  )
}

export default SignupPage