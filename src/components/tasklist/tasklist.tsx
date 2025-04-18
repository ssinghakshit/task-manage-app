import { Task } from "../../types/types";
import TaskItem from "../taskitem/taskitem";
import "./tasklist.css";

type TaskListProps = {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
};

function TaskList({ tasks, onToggleStatus }: TaskListProps) {
  return (
    <div className="task-list">
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} />
        ))
      )}
    </div>
  );
}

export default TaskList;
