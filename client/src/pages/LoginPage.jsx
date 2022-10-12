import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <form>
    <h2>Login Page</h2>
    {/* <label for="username">Username</label> */}
    <input type="text" id="username" name="username" placeholder="Username"></input>

    {/* <label for="password">Password</label> */}
    <input type="text" id="password" name="password" placeholder="Pasword"></input>

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