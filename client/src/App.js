import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import { useState, useEffect } from "react";
import AllTasksPage from './pages/AllTasksPage';
import NavBar from './components/NavBar';
import NewTaskPage from './pages/NewTaskPage'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    }).then(() => {
      console.log("Heading to Login page")
    })
  }, []);

  console.log("Logged In User => ", user)


  if (!user) return <LoginPage onLogin={setUser} />

  return (
  <main>
    <NavBar setUser={setUser} user={user}/>
    <Routes>
      <Route path="/tasks/new" element={<NewTaskPage user={user}/>} />
      <Route path="/tasks" element={<AllTasksPage user={user}/>} />
    </Routes>
  </main>
  )
}

export default App;

//React Fetch in App is not returning at full promise when useEffect fires, just a promise. This needs to solved for auto login.