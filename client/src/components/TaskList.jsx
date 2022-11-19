import React from 'react'
import TaskContainer from '../components/TaskContainer';

const TaskList = ( {tasks, handleDeleteTask} ) => {

//Map across tasks that are set in state.

  return (
    <ul>
      {tasks.map((task) => {
        return (
        <TaskContainer task={task} key={task.id} complete={task.complete} handleDeleteTask={handleDeleteTask}/> )
      })}
    </ul>
  )
}

export default TaskList