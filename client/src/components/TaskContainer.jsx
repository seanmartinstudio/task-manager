import React from 'react'
import { useState } from "react"

const TaskContainer = ( {task, complete, handleDeleteTask} ) => {
 const {id, heading, body} = task
 const[taskComplete, setTaskComplete] = useState(complete)

 const changeToIncomplete = () => {
  fetch(`/tasks/` + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ complete: false }),
  })
    .then((r) => r.json())
    .then((data) => {
      setTaskComplete(data.complete)
    });
}

 const changeToComplete = () => {
  fetch(`/tasks/` + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ complete: true }),
  })
    .then((r) => r.json())
    .then((data) => {
      setTaskComplete(data.complete)
  });
 }

 function handleDeleteClick() {
  fetch(`/tasks/` + id, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      handleDeleteTask(id);
    }
  });
}
  return (
   <div>
    <article>
      <h1>{heading}</h1>
      <p>Body: {body}</p>
      <p>Published by: {task.user.username}</p>
      <p>Category: {task.category.category_title}</p>
      {taskComplete
      ? <button type="button" onClick={(event) => changeToIncomplete(event)}>Complete</button>
      : <button type="button" onClick={(event) => changeToComplete(event)} >Incomplete</button>
      }
      <button type="button" onClick={handleDeleteClick}>Delete</button>
    </article>
   </div>
  )
}

export default TaskContainer