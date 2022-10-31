import React from 'react'
import { Link } from "react-router-dom";

const NavBar = ( {setUser} ) => {
function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null);
        }
    });
    }

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