import React, {useState} from 'react'

const AddTask = ({addTask}) => {
    const [value, setValue] = useState("");

    const addItem = () => {
        addTask(value);
        setValue('');
    }

  return (
    <div>
        <div className='adding-task'>
            <input 
            className='inputting' 
            type="text" 
            placeholder="Add Your Task" 
            value={value}
            onChange={
              (e)=> {
                setValue(e.target.value);
                    }
            }>
            </input>
            <button 
            className='adding-button' 
            onClick={addItem}>Add Task</button>
        </div>
    </div>
  )
}

export default AddTask