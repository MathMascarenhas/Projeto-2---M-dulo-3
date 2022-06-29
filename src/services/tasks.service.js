import Task from '../models/Task.js'

export const findAllTasksService = async () => {
    const tasks = await Task.find()
    return tasks;
}
export const findTaskByIdService = async (id) => {
  const taskById = await Task.findById(id);
  return taskById;
};

export const createTaskService = (newTask) => {
  const lastObject = tasks[tasks.length - 1];
  const newId = lastObject.id + 1;
  newTask.id = newId;
  newTask.done = false;
  tasks.push(newTask);
  return newTask;
};

export const updateTaskService = (id, taskEdited) => {
  taskEdited.id = id;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return false;
  } else {
    tasks[taskIndex] = taskEdited;
    return taskEdited;
  }
};

export const deleteTaskService = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return false;
  } else {
    return tasks.splice(taskIndex, 1);
  }
};
