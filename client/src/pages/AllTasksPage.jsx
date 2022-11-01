import React from 'react'
import { useEffect } from "react";

const AllTasksPage = () => {

useEffect(() => {
  fetch("/all-tasks")
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
    });
}, []);


  return (
    <article>
        <h1 className='task-header'>Title</h1>
        <h2>User</h2>
        <h3>Category</h3>
        <p>Body</p>
        <radio>Complete</radio>
    </article>
  )
}

export default AllTasksPage