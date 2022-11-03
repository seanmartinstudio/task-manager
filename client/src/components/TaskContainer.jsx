import React from 'react'

const TaskContainer = ( {heading, body, complete} ) => {


  return (
    <article>
        <h1 className='task-header'>{heading}</h1>
        <h2>User</h2>
        <h3>Category</h3>
        <p>{body}</p>
        <p>{complete}</p>
    </article>
  )
}

export default TaskContainer