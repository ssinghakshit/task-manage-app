import { Task } from "../types/types";

const initialTasks: Task[] = [
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Draft the Q3 project proposal for client review',
      completed: false,
      createdAt: new Date('2025-04-15')
    },
    {
      id: '2',
      title: 'Review pull requests',
      description: 'Review and merge team pull requests',
      completed: true,
      createdAt: new Date('2025-04-14')
    }
  ];
  
  const tasks = [...initialTasks];
  //get all task
  export const getAllTasks = (): Task[] => {
    return [...tasks];
  };
  
  //filter task
    export const getFilteredTasks = (filter: 'all' | 'completed' | 'not completed'): Task[] => {
    let filteredTasks = [...tasks];
    
    if (filter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === 'not completed') {
      filteredTasks = tasks.filter(task => !task.completed);
    }
    
    return filteredTasks;
  };

  //add new task
  export const addTask = (task: Omit<Task, 'id' | 'createdAt'>): Task [] => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    tasks.push(newTask);
    return [...tasks];
  };

  //update task status
  export const updateTaskStatus = (id: string): Task | null => {
    const index = tasks.findIndex(task => task.id === id);
    
    if (index !== -1) {
      tasks[index] = {
        ...tasks[index],
        completed: !tasks[index].completed
      };
      return (tasks[index]);
    }
    
    return null;
  };