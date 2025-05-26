const mongoose = require('mongoose');

// Definindo o esquema do usuário
const commentSchema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  dataCriacao: {
    type: String,
    required: true,
    unique: true,
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task', 
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Criando o modelo
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;