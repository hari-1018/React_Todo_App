import React,{useState} from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
    const [tasks, setTasks] = useState([]);


    const addTask = (title) =>{
        if(!title){
            alert('Task Cannot be Empty.Please enter a task');
            return;
        };
        const newTasks = [...tasks, {title}]
        setTasks(newTasks);
    }
    const deleteTask = (index) =>{
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    }
  return (
    <div className='todo'>
        <div>
            <AddTask addTask={addTask} />
        </div>
        <div>
            {tasks.map((task,index) =>(<ListTask task={task} deleteTask={deleteTask} index={index} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Todo