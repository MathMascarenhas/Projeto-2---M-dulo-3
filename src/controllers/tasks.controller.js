import mongoose from 'mongoose';
import {
  findAllTasksService,
  findTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from '../services/tasks.service.js';

export const findTasksController = async (req, res) => {
  const allTasks = await findAllTasksService();
  res.send(allTasks);
};

export const findTaskByIdController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenTask = await findTaskByIdService(idParam);
  if (chosenTask === null) {
    return res.status(204).send({ message: 'Tarefa não foi encontrada' });
  }

  res.send(chosenTask);
};

export const createTaskController = (req, res) => {
  const task = req.body;
  const newTask = createTaskService(task);
  res.send(newTask);
};

export const updateTaskController = (req, res) => {
  const idParam = +req.params.id;
  const taskEdit = req.body;
  const updatedTask = updateTaskService(idParam, taskEdit);
  if (updatedTask === false) {
    res.status(204).send({ message: 'Tarefa não foi encontrada' });
  } else {
    res.send(updatedTask);
  }
};

export const deleteTaskController = (req, res) => {
  const idParam = +req.params.id;
  if (deleteTaskService(idParam)) {
    res.send({ message: 'Tarefa deletada com sucesso!' });
  } else {
    res.status(204).send({ message: 'Tarefa não foi encontrada' });
  }
};
