const Task = require('../models/task');
const Log = require('../models/log');



const getTask = async (req, res) => {
  try {
    const tasks = await Task.find().populate('userId');
    res.json( tasks );
  } catch (error) {
    res.status(500).send('Erro ao buscar tarefas');
  }
};



const getOneTaskStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }


    res.status(200).json({ statusAntigo: task.status });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a tarefa' });
  }
};


const postTask = async (req, res) => {
  const { titulo, descricao, status, userId } = req.body;

  const newTask = new Task({
    titulo,
    descricao,
    status,
    userId
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateTask = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { titulo, descricao, status },
      { new: true } 
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateStatusTask = async (req, res) => {
  const { id } = req.params; 
  const { statusNovo, userId } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    const statusAntigo = task.status;
    task.status = statusNovo;
    await task.save();

    const newLog = new Log({
      data: new Date(),
      statusAntigo,
      statusNovo,
      taskId: task._id,
      userId: userId
    });

    await newLog.save();

    res.status(200).json({ message: 'Status atualizado', tarefa: task });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status', error: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.status(200).json({ message: 'Tarefa deletado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTask, getOneTaskStatus,postTask, updateTask, deleteTask, updateStatusTask };
