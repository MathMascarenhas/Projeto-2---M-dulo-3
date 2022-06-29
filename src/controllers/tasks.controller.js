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

export const createTaskController = async (req, res) => {
  const task = req.body;

  if (!task.title || !task.description || !task.deadline) {
    return res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos' });
  }

  const newTask = await createTaskService(task);
  res.send(newTask);
};

export const updateTaskController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const taskEdit = req.body;

  const updatedTask = await updateTaskService(idParam, taskEdit);
  res.send(updatedTask);
};

export const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  await deleteTaskService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};
