import TaskCard from './TaskCard';

function TaskList(props) {
  if (props.tasks.length === 0) {
    return <p>No tasks, yay!</p>;
  }

  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <TaskCard key={task.id} task={task} deleteTask={props.deleteTask} />
        );
      })}
    </div>
  );
}

export default TaskList;
