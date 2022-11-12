import React from 'react'
import { useEffect } from "react";

const NewTaskForm = ( {handleSubmitTask, setHeading, setBody, setCategories, categories, setCategory, category} ) => {

     
      const categoryList = categories.map((category) =>
      <option value={category.id} key={category.id}>{category.category_title}</option>
      )


  return (
    <form onSubmit={handleSubmitTask}>
        <h1>Create New Task</h1>
        <input type="text" id="heading" name="heading" placeholder="Heading..." onChange={(event) => setHeading(event.target.value)}></input>
        <input type="text" id="body" name="body" placeholder="Body..." onChange={(event) => setBody(event.target.value)}></input>
        <br></br>
        <select name="categories" id="categories" value={category} onChange={(event) => setCategory(event.target.value)}>
        <option id="categories" value="">Category...</option>
        {categoryList}
        </select>
        <br></br>
        <button className='button'>Create Task</button>
  </form>
  )
}

export default NewTaskForm