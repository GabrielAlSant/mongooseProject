const Task = require('../models/task');


const getTask = async function(req, res, next) {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  }
};

const postTask = async (req, res) => {
  const { 
    titulo,
    descricao,
    status
} = req.body;

  const newTask = new Task({
    titulo,
    descricao,
    status,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTask, postTask };