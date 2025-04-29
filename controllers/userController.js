const User = require('../models/user');


const getUser = async function(req, res, next) {
  try {
    const users = await User.find();
    res.render('index', { users });
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  }
};

const postUser = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUser, postUser };