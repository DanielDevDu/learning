import { useState, useEffect } from 'react';

function TaskForm(props) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTask({
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
