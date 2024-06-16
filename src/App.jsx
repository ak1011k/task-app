import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task, dueDate, assignee) => {
    const newTask = { id: tasks.length, text: task, dueDate, assignee, completed: false };
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.assignee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>進捗管理アプリ</h1>
      </header>
      <div className="App-content">
        <TaskForm addTask={addTask} />
        <input
          type="text"
          placeholder="担当者で検索"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <TaskList tasks={filteredTasks} toggleTask={toggleTask} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;