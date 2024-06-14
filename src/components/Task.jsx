import React from 'react';

function Task({ task, toggleTask, removeTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text} - {task.dueDate}
      </span>
      <button onClick={() => removeTask(task.id)}>削除</button>
    </li>
  );
}

export default Task;
