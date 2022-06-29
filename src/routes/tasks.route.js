import express from 'express';
const router = express.Router();

import {
  findTasksController,
  findTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from '../controllers/tasks.controller.js';

router.get('/tasks', findTasksController);
router.get('/task/:id', findTaskByIdController);
router.post('/create-task', createTaskController);
router.put('/update-task/:id', updateTaskController);
router.delete('/delete-task/:id', deleteTaskController);

export default router;
