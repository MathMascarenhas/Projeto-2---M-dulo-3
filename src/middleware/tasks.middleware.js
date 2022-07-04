import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

export const validObject = (req, res, next) => {
  const task = req.body;
  if (!task.title || !task.description || !task.deadline) {
    return res
      .status(400)
      .send({ message: 'Por favor preencha todos os campos' });
  }
  next();
};
