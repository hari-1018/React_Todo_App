import React from 'react'

const ListTask = ({task,index,deleteTask}) => {
  return (
    <div className='task-list-container'>
        <div className='listing-tasks'>
            {task.title}
            <button onClick={()=> {deleteTask(index)}} className='delete-button'>Delete Task</button>
        </div>
    </div>
  )
}

export default ListTask