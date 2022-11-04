import React from 'react'
import { useEffect, useState } from "react";
import TaskList from '../components/TaskList';


const AllTasksPage = ( {user} ) => {
const [tasks, setTasks] = useState([])
const [taskComplete, setTaskComplete] = useState(false)

useEffect(() => {
  fetch("/all-tasks")
    .then((r) => r.json())
    .then(setTasks);
},[]);
// if you user.username == allTasks.username
// console.log("All Tasks Page - User", user)
// console.log("All Tasks Page - Post", allTasks)

// const changeToIncomplete = (event) => {
//   fetch(`/tasks/` + id, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ complete: false }),
//   })
//     .then((r) => r.json())
//     .then((data) => {
//       console.log("Data", data)
//     });
// }

// //Changes complete API and UI to 'complete'
// const changeToComplete = (event) => {
//   fetch(`/tasks/` + id, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ complete: true }),
//   })
//     .then((r) => r.json())
//     .then((data) => {
//       console.log("Data", data)
//     });



  return (
    <div>
      <TaskList tasks={tasks} />
    </div>

  )
}

//Need to create a component for each Task, map accross data and pass to the Task card componenet

export default AllTasksPage