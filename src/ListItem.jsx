import React, { useState } from 'react';
import { useDispatch } from "react-redux";
// import { toggleComplete, deleteTask } from './features/tasks/taskSlice';

const ListItem = ({ task, index }) => {
    const dispatch = useDispatch();

    return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <input
         type="checkbox"
         checked={task.completed}
         onChange={() => dispatch(toggleComplete(index))}
        />
        <span>{task.text}</span>
        <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
    </li>
    );
};

export default ListItem;