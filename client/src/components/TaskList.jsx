import React from 'react'
import TaskContainer from '../components/TaskContainer';

const TaskList = ( {tasks} ) => {
//This page is getting hit

  return (
    <ul>
      {tasks.map((task) => {
        return (
        <TaskContainer task={task} key={task.id} complete={task.complete}/> )
      })}
    </ul>
  )
}

export default TaskList