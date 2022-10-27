import TaskCard from './TaskCard';
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>No tasks, yay!</p>;
  }

  return (
    <div>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
