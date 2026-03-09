//This file handles the logic of counting the tasks left and the display of how many tasks are left
function TasksLeft({ totalTasks, completedTasks }){
  const remaining = totalTasks - completedTasks;

  if (totalTasks === 0) return null;

    return (
        <p className="task-left px-1">
          {remaining} item{remaining !== 1 ? "s" : ""} left
        </p>
    );
}

export default TasksLeft;
