import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ( {setUser, user} ) => {

function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null);
        }
    });
    }
    
    //holds value of logged in user's name, for future rendering to page"
    // let userName = user.username

  return (
    <nav className='nav'>
      <Link to="/tasks">
      <button>Tasks</button>
      </Link>
      <Link to="/tasks/new">
      <button>New</button>
      </Link>
      <button className="button" type="button" onClick={handleLogoutClick}>Log Out</button>
    </nav>
  )
}

export default NavBar