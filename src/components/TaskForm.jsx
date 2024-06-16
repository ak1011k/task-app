import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && dueDate && assignee.trim()) {
      addTask(task, dueDate, assignee);
      setTask('');
      setDueDate('');
      setAssignee('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="タスク"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="担当者"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TaskForm;