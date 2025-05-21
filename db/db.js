const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gabrielsantos26:gabrielsantos26@sistemagestao.jzgohqc.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

module.exports = mongoose;