const Log = require('../models/log');


const getLog = async function (req, res, next) {
    try {
        const logs = await Log.find();
        res.render('index', { logs });
    } catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
};

const postLog = async (req, res) => {
    const {
        data,
        statusAntigo,
        statusNovo
    } = req.body;

    const newLog = new Log({
        data,
        statusAntigo,
        statusNovo
    });

    try {
        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getLog, postLog };