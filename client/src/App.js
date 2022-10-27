import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import SignupPage from './pages/SignupPage'
import { useState, useEffect } from "react";
import axios from 'axios'
import AllTasksPage from './pages/AllTasksPage';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // // auto-login
    fetch("http://localhost:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    }).then(() => {
      console.log("Hello World")
    })
  }, []);


  if (!user) return <LoginPage onLogin={setUser} />

  return (
  <Routes>
    <Route path="/signup" element={<SignupPage/>} />
    
    <Route path="/" element={<AllTasksPage/>} />
  </Routes>
  )
}

export default App;

//React Fetch in App is not returning at full promise when useEffect fires, just a promise. This needs to solved for auto login.