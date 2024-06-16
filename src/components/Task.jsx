import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  const isDueSoon = () => {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  };

  return (
    <li className={isDueSoon() ? 'due-soon' : ''}>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text} - {task.dueDate} - 担当者: {task.assignee}
      </span>
      <button onClick={() => toggleTask(task.id)}>
        {task.completed ? '未完了' : '完了'}
      </button>
      <button onClick={() => removeTask(task.id)}>削除</button>
    </li>
  );
}

export default Task;
