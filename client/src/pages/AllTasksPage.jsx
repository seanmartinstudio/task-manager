import React from 'react'
import { useEffect, useState } from "react";

const AllTasksPage = ( ) => {
const [allTasks, setAllTasks] = useState([])

useEffect(() => {
  fetch("/all-tasks")
    .then((r) => r.json())
    .then(setAllTasks);
},[]);

console.log("JSON", allTasks)

  return (
    <div>{allTasks.map((task) => ( 
      <article key={task.id}>
      <h1>{task.heading}</h1>
      <p>Published by: {task.user.username}</p>
      <p>Category: {task.category.category_title}</p>
      <p>Body: {task.body}</p>
      <p>Complete: {task.complete.toString()}</p>
      </article>
    ))}</div>
  )
}

//Need to create a component for each Task, map accross data and pass to the Task card componenet

export default AllTasksPage