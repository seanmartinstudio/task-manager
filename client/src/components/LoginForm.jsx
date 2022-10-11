import React from 'react'

const LoginForm = () => {
  return (
    <form>
        <h2>LoginForm Component</h2>
        {/* <label for="username">Username</label> */}
        <input type="text" id="username" name="username" placeholder="Username"></input>

        {/* <label for="password">Password</label> */}
        <input type="text" id="password" name="password" placeholder="Pasword"></input>

        <br></br>
        <button class="button">Login</button>

        <br></br>
        <button class="button">New User Signup</button>


    </form>
  )
}


export default LoginForm