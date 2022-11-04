import React from 'react'
import { useEffect, useState } from "react";

const AllTasksPage = ( {user} ) => {
const [allTasks, setAllTasks] = useState([])
const [taskComplete, setTaskComplete] = useState(false)

useEffect(() => {
  fetch("/all-tasks")
    .then((r) => r.json())
    .then(setAllTasks);
},[]);
// if you user.username == allTasks.username
console.log("All Tasks Page - User", user)
console.log("All Tasks Page - Post", allTasks)
  return (
    <div>{allTasks.map((task) => ( 
      <article key={task.id}>
      <h1>{task.heading}</h1>
      <p>Published by: {task.user.username}</p>
      <p>Category: {task.category.category_title}</p>
      <p>Body: {task.body}</p>
      <p>Complete: {task.complete.toString()}</p>
      {taskComplete
      ? <button>Complete</button>
      : <button>Incomplete</button>
      }
      <br></br>
      <br></br>
      </article>
    ))}</div>
  )
}

//Need to create a component for each Task, map accross data and pass to the Task card componenet

export default AllTasksPage