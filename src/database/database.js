import mongoose from 'mongoose';
const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/db_to_do_list', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB conectado!');
    })
    .catch((error) => {
      return console.log(`Erro na conexão com o banco, erro: ${error}`);
    });
};

export default connectToDatabase;
