import express from 'express';
const router = express.Router();

import { validId, validObject } from '../middleware/tasks.middleware.js';
import {
  findTasksController,
  findTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from '../controllers/tasks.controller.js';

router.get('/', findTasksController);
router.get('/:id', validId, findTaskByIdController);
router.post('/', validObject, createTaskController);
router.put('/:id', validId, validObject, updateTaskController);
router.delete('/:id', validId, deleteTaskController);

export default router;
