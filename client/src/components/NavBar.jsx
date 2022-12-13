import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const NavBar = ( {setUser, user} ) => {
  const navigate = useNavigate()

function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null);
        }}).then(navigate('/'));
    }
    
    //holds value of logged in user's name, for future rendering to page"
    // let userName = user.username

  return (
    <nav className='nav'>
      <Link to="/tasks">
      <button> All Tasks</button>
      </Link>
      <Link to="/tasks/new">
      <button>New Task</button>
      <Link to="/categories/new">
      <button>New Category</button>
      </Link>
      </Link>
      <button className="button" type="button" onClick={handleLogoutClick}>Log Out</button>
    </nav>
  )
}

export default NavBar