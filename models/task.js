const mongoose = require('mongoose');

// Definindo o esquema do usuário
const taskSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Criando o modelo
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;