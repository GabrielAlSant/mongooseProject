const mongoose = require('mongoose');

// Definindo o esquema do usuário
const logSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  statusAntigo: {
    type: String,
    required: true,
    unique: true,
  },
  statusNovo: {
    type: String,
    required: true,
  },
  taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task', 
      required: true
    },userId: {
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
const Log = mongoose.model('Log', logSchema);

module.exports = Log;