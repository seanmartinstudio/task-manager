import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import SignupPage from './pages/SignupPage'
import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // axios.post('http://localhost:3000/login', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
        // // auto-login
    // fetch("/me").then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => setUser(user));
    //   }
    // });
    console.log("fire")
  }, []); 

  return (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
  </Routes>
  )
}

export default App;

