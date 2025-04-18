import { Task } from "../../types/types";
import "./taskitem.css";

type TaskItemProps = {
  task: Task;
  onToggleStatus: (id: string) => void;
};

function TaskItem({ task, onToggleStatus }: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p className="task-date">
          Created: {task.createdAt.toLocaleDateString()}
        </p>
      </div>
      <div className="task-actions">
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleStatus(task.id)}
          />
          {task.completed ? "Completed" : "Mark as completed"}
        </label>
      </div>
    </div>
  );
}

export default TaskItem;
