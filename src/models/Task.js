import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  done: { type: Boolean, required: true },
});

const Task = mongoose.model('tasks', TaskSchema);

export default Task;
