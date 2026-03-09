//This file organizes the UI and contains controls for:
     {/* items left */}
      {/* filters: All / Active / Completed */}
      {/* clear completed */}
import Filters from "@components/tasks/Filters.jsx";
import TasksLeft from "@components/tasks/TasksLeft.jsx";
import ClearCompleted from "@components/tasks/ClearCompleted.jsx";

function TaskControls({ filter, setFilter, totalTasks, completedTasks, clearCompleted }) {
  return (
    <div className="task-controls flex items-center justify-between px-2 text-xs text-muted-foreground border-t border-border py-2">

        <TasksLeft //passes props numbers so TasksLeft can display "items left"
            totalTasks={totalTasks} //created a prop named totalTasks and gave it the value of the var totalTasks
            completedTasks={completedTasks} // another prop for completedTasks and gave it value of the var completedTasks
        />
        <Filters
          filter={filter}//tells Filters which button is active
          setFilter={setFilter} //lets Filters update the state that lives in TaskList, not Filters
         />
        <ClearCompleted // disabled when completedTasks === 0, calls clearCompleted on click
          completedTasks={completedTasks}
          clearCompleted={clearCompleted}
        />


    </div>
  );
}

export default TaskControls;
