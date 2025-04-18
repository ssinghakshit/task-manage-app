import { useState } from 'react';
import { addTask } from '../../service/taskService';
import './taskform.css';

type TaskFormProps = {
  onTaskAdded: () => void;
};

function TaskForm({ onTaskAdded }: TaskFormProps) {
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTask.title.trim()) return;

    await addTask({
      title: newTask.title,
      description: newTask.description,
      completed: false
    });
    
    setNewTask({ title: '', description: '' });
    onTaskAdded();
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={newTask.title}
            onChange={e => setNewTask({...newTask, title: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={newTask.description}
            onChange={e => setNewTask({...newTask, description: e.target.value})}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;