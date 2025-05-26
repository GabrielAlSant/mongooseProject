const Log = require('../models/log');



const getLog = async (req, res) => {
  try {
    const logs = await Log.find();
    res.json( logs ); 
  } catch (error) {
    res.status(500).send('Erro ao buscar logs');
  }
};

const postLog = async (req, res) => {
  const {
    data,
    statusAntigo,
    statusNovo,
    taskId,
    userId 
  } = req.body;

  const newLog = new Log({
    data,
    statusAntigo,
    statusNovo,
    taskId,
    userId 
  });

  try {
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateLog = async (req, res) => {
  const { id } = req.params;
  const { data, statusAntigo, statusNovo } = req.body;

  try {
    const updatedLog = await Log.findByIdAndUpdate(
      id,
      { data, statusAntigo, statusNovo },
      { new: true }
    );

    if (!updatedLog) {
      return res.status(404).json({ message: 'Log não encontrado' });
    }

    res.status(200).json(updatedLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteLog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLog = await Log.findByIdAndDelete(id);

    if (!deletedLog) {
      return res.status(404).json({ message: 'Log não encontrado' });
    }

    res.status(200).json({ message: 'Log deletado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLog,
  postLog,
  updateLog,
  deleteLog,
};
