import React, { useState } from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4} from 'uuid';

function TaskForm(props){

  const[input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  };

  const handleTask = e =>{
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      finished: false
    };

    props.onSubmit(newTask);
    setInput('');
  };

  return(
    <form 
      className='task-form'
      onSubmit={handleTask}>
      <input
        className='input-task'
        type='text'
        placeholder='idk'
        name='text'
        value = {input}
        onChange={handleChange}
      />
      <button className='button-task'>
        Add task
      </button>
      </form>
  );
}

export default TaskForm;