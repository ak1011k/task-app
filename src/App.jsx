import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, dueDate) => {
    const newTask = { id: tasks.length, text: task, dueDate, completed: false };
    const updatedTasks = [...tasks, newTask].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>進捗管理アプリ</h1>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
