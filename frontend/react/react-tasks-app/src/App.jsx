import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { tasks as data } from './data/task';
import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      name: task.name,
      status: 'Unstarted',
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <h1>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </h1>
  );
}

export default App;
