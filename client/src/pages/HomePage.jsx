import React from 'react'

const HomePage = ( {user} ) => {
  return (
    <div>
        <br></br>
        <h1 id="welcomePage">Welcome {user.username} !</h1>
    </div>
  )
}

export default HomePage