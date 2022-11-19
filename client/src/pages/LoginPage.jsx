import React from 'react'
import { useState } from "react";
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const LoginPage = ( {setUser} ) => {

  //This boolean value toggles the LoginForm and SignupForm button via ternary.
  const [showLogin, setShowLogin] = useState(true)

 return (
  <div>
  { showLogin 
  ? <LoginForm setUser={setUser} setShowLogin={setShowLogin}/>
  : <SignupForm setUser={setUser} setShowLogin={setShowLogin}/>
  }
  </div>
 )
  }


export default LoginPage