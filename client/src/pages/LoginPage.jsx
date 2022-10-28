import React from 'react'
import { useState } from "react";
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';



const LoginPage = ( {onLogin} ) => {
  const [showLogin, setShowLogin] = useState(true)

 return (
  <div>
  { showLogin 
  ? <LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>
  : <SignupForm onLogin={onLogin} setShowLogin={setShowLogin}/>
  }
  </div>
 )
  }


export default LoginPage