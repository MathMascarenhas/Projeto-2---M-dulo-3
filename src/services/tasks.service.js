import Task from '../models/Task.js';

export const findAllTasksService = async () => await Task.find();

export const findTaskByIdService = async (idParam) => await Task.findById(idParam);

export const createTaskService = async (newTask) => {
  newTask.done = false;
  return await Task.create(newTask);
};

export const updateTaskService = async (idParam, taskUpdate) => await Task.findByIdAndUpdate(idParam, taskUpdate).setOptions({ returnOriginal: false });

export const deleteTaskService = async (idParam) => await Task.findByIdAndDelete(idParam);
