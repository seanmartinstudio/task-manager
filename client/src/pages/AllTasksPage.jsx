import React from 'react'
import { useEffect, useState } from "react";
import TaskList from '../components/TaskList';

const AllTasksPage = ( ) => {
const [tasks, setTasks] = useState([])

console.log("All Rendered Tasks =>", tasks)

//Fetches all tasks published by logged in user by querying session id. 
useEffect(() => {
  fetch("/tasks")
    .then((r) => r.json())
    .then(setTasks);
},[]); //

//Updates 'tasks' state after task is deleted.
const handleDeleteTask = (id) => {
  const updatedTaskArray = tasks.filter((task) => task.id !== id);
  setTasks(updatedTaskArray)
}

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>

  )
}


export default AllTasksPage