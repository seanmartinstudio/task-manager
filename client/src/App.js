import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import { useState, useEffect} from "react";
import AllTasksPage from './pages/AllTasksPage';
import NavBar from './components/NavBar';
import NewTaskPage from './pages/NewTaskPage'
import HomePage from './pages/HomePage';
import NewCategoryPage from './pages/NewCategoryPage';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    //When app.js mounts, fetch user by session id for login, store logged in user in 'user' state.
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }})
  }, []);

  //If user can't be found by session id, return the Login Page.
  if (!user) return <LoginPage setUser={setUser} />

  console.log("Logged In User => ", user)

  return (
  <main>
    <NavBar setUser={setUser} user={user}/>
    <Routes>
      <Route exact path="/" element={<HomePage user={user}/>} />
      <Route exact path="/login" element={<LoginPage />}/>
      <Route exact path="/tasks/new" element={<NewTaskPage user={user}/>} />
      <Route exact path="/tasks" element={<AllTasksPage user={user}/>} />
      <Route exact path="/categories/new" element={<NewCategoryPage user={user}/>} />
    </Routes>
  </main>
  )
}

export default App;

