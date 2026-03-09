//This file controls the UI state and delegates the actual task updates to the data layer.
//shadcn imports
import { Button } from "@components/ui/button";

function ClearCompleted({ completedTasks, clearCompleted }) {
  const isDisabled = completedTasks === 0;//button is disabled if completedTasks is = 0

  return (
    <Button
      type="button"
      variant="gradient"
      onClick={clearCompleted}
      disabled={isDisabled}
      className="text-muted-foreground hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
    >
      Clear Completed
    </Button>
  );
}

export default ClearCompleted;
