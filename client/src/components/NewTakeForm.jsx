import React from 'react'
import { useEffect } from "react";

const NewTakeForm = ( {handleSubmitTask, setHeading, setBody, setCategories, categories} ) => {

     
      const categoryList = categories.map((category) =>
      <option>{category.category_title}</option>
      )

    console.log("New Task Page Categories", categories)
  return (
    <form onSubmit={handleSubmitTask}>
        <h1>New Task Form</h1>
        <input type="text" id="heading" name="heading" placeholder="Heading" onChange={(event) => setHeading(event.target.value)}></input>
        <input type="text" id="body" name="body" placeholder="Body" onChange={(event) => setBody(event.target.value)}></input>
        <br></br>
        <label>Choose a car:</label>

        <select name="categories" id="categories">
        {categoryList}
        </select>
        <br></br>
        <button className='button'>Create Task</button>
  </form>
  )
}

export default NewTakeForm