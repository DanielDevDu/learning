import { createContext } from 'react';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const x = 20;
  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
}
