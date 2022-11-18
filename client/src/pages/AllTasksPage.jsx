import React from 'react'
import { useEffect, useState } from "react";
import TaskList from '../components/TaskList';


const AllTasksPage = ( ) => {
const [tasks, setTasks] = useState([])

console.log("ALL RENDERED TAKS =>", tasks)

useEffect(() => {
  fetch("/tasks")
    .then((r) => r.json())
    .then(setTasks);
},[]); //

// Updates state with current Tasks after DELETE
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