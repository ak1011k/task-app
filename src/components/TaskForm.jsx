import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && dueDate) {
      addTask(task, dueDate);
      setTask('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="新しいタスクを追加"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TaskForm;
