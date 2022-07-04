import {
  findAllTasksService,
  findTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} from '../services/tasks.service.js';

export const findTasksController = async (req, res) => {
  const allTasks = await findAllTasksService();
  if (allTasks.length === 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma tarefa cadastrada!' });
  }
  res.send(allTasks);
};

export const findTaskByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenTask = await findTaskByIdService(idParam);
  res.send(chosenTask);
};

export const createTaskController = async (req, res) => {
  const task = req.body;
  const newTask = await createTaskService(task);
  res.satus(201).send(newTask);
};

export const updateTaskController = async (req, res) => {
  const idParam = req.params.id;
  const taskUpdate = req.body;
  const updatedTask = await updateTaskService(idParam, taskUpdate);
  res.send(updatedTask);
};

export const deleteTaskController = async (req, res) => {
  const idParam = req.params.id;
  await deleteTaskService(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};
