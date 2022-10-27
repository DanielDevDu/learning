import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { createTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      name: taskName,
      description: taskDescription,
    });
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Write your task'
          onChange={handleChange}
          value={taskName}
          autoFocus
        />
        <textarea
          placeholder='Write description'
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
