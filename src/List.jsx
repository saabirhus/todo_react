import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ListItem from './ListItem';

const List = () => {
    const tasks = useSelector((state) => state.tasks);

    return(
        <ul className='task-list'>
            {tasks.map((task, index) => (
                <ListItem key={index} task={task} index={index} />
            ))}
        </ul>
    );
};

export default List;