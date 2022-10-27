import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div key={task.id}>
      <h3>{task.name}</h3>
      <p>{task.status}</p>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
