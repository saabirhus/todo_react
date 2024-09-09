import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './features/tasks/taskSlice';

const Form = ({ addTask }) => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()){
            dispatch(addTask(task));
            setTask('');
        }
    };

    return(
        <form className='task-form' onSubmit={handleSubmit}>
            <input 
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Add a new task!'
            />
            <button type='submit'>Submit task!</button>
        </form>
    );
};

export default Form;