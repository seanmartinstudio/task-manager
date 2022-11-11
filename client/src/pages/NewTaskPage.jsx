import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewTakeForm from '../components/NewTakeForm';

const NewTaskPage = () => {
  const [heading, setHeading] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((data) => {
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
    .then((response) => {
      if (response.ok) {
        navigate('/tasks')
      }
    })
  }
  

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