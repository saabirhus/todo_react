import React, { useState } from "react";
import Form from './Form';
import List from './List';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false}]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="app-container">
      <h1>My To-Do App</h1>
      <Form addTask={addTask }/>
      <List tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;