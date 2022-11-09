import React from 'react'
import { useState, useEffect } from "react";
import NewTakeForm from '../components/NewTakeForm';

const NewTaskPage = () => {
  const [heading, setHeading] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((data) => {
        // console.log("Category Data", data)
        setCategories(data)
      });
  },[]);


  const handleSubmitTask = (event) => {
    event.preventDefault()
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading,
        body,
        complete: false,
        category_id: parseInt(category)
      }),
    })
      .then((r) => r.json())
      // .then((newPlant) => onAddPlant(newPlant));
      .then((data) => console.log("New Task Data Response", data))
  }
  
 console.log("Selected Category", category)
  return (
    <div>
      <NewTakeForm handleSubmitTask={handleSubmitTask} setHeading={setHeading} setBody={setBody} setCategory={setCategory} categories={categories} category={category}/>
    </div>
  )
}

//Fetch array of category objects
//Mapp across array of category objects and dynamilly render them to dropdown UI
//Grab cateogry drop down to pass on as category param when creating new task

export default NewTaskPage