import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCategoryPage = () => {
    const[category_title, setCategoryTitle] = useState("")
    const navigate = useNavigate()

    const handleSubmitCategory = (event) => {
        event.preventDefault()
        fetch("/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ category_title }),
        }).then((response) => {
        if (response.ok) {
            navigate('/tasks/new')
            }
        });
    }
    
  return (
    <form onSubmit={handleSubmitCategory}>
        <h1>Create New Category</h1>
        <input type="text" placeholder="Category..." onChange={(event) => setCategoryTitle(event.target.value)}></input>
        <br></br>
        <button> Create Category</button>
    </form>
  )
}

export default NewCategoryPage