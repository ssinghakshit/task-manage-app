import "./taskFilter.css";

type TaskFilterProps = {
  currentFilter: "all" | "completed" | "not completed";
  onFilterChange: (filter: "all" | "completed" | "not completed") => void;
};

function TaskFilter({ currentFilter, onFilterChange }: TaskFilterProps) {
  return (
    <div className="filter-controls">
      <button
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={currentFilter === "not completed" ? "active" : ""}
        onClick={() => onFilterChange("not completed")}
      >
        Not Completed
      </button>
    </div>
  );
}

export default TaskFilter;
