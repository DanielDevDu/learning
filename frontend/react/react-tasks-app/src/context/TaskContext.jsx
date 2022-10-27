import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
