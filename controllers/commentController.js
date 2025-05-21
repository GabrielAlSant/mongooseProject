const Comment = require('../models/comment');


const getComment = async function(req, res, next) {
  try {
    const comments = await Comment.find();
    res.render('index', { comments });
  } catch (error) {
    res.status(500).send('Erro ao buscar usuários');
  }
};

const postComment = async (req, res) => {
  const { 
    texto,
    dataCriacao
} = req.body;

  const newComment = new Comment({
    texto,
    dataCriacao
  });

  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




module.exports = { getComment, postComment };