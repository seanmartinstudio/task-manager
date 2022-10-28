import React from 'react'

const NavBar = ( {setUser} ) => {
function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
        setUser(null);
        }
    });
    }

  return (
    <div>
        <button className="button" type="button" onClick={handleLogoutClick}>Sign Out</button>
    </div>
  )
}

export default NavBar