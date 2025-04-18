import { useState, useEffect, useCallback } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Task } from "./types/types";
import TaskForm from "./components/Taskform/taskform";
import TaskFilter from "./components/Taskfilter/taskfilter";
import TaskList from "./components/tasklist/tasklist";

import "./App.css";
import { getFilteredTasks, updateTaskStatus } from "./service/taskService";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "not completed">(
    "all"
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getFilteredTasks(filter);
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleToggleStatus = async (id: string) => {
    await updateTaskStatus(id);
    loadTasks();
  };

  const handleFilterChange = (
    newFilter: "all" | "completed" | "not completed"
  ) => {
    setFilter(newFilter);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager Application</h1>

      <TaskForm onTaskAdded={loadTasks} />

      <TaskFilter currentFilter={filter} onFilterChange={handleFilterChange} />

      {isLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} />
      )}
    </div>
  );
}

export default App;
