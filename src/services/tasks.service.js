import Task from '../models/Task.js';

export const findAllTasksService = async () => {
  const tasks = await Task.find();
  return tasks;
};
export const findTaskByIdService = async (id) => {
  const taskById = await Task.findById(id);
  return taskById;
};

export const createTaskService = async (newTask) => {
  newTask.done = false;
  const createdTask = await Task.create(newTask);
  return createdTask;
};

export const updateTaskService = async (id, taskUpdate) => {
  const editedTask = Task.findByIdAndUpdate(id, taskUpdate);
  return editedTask;
};

export const deleteTaskService = async (id) => {
  await Task.findByIdAndDelete(id);
};
