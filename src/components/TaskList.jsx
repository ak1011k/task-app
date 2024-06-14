import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;

