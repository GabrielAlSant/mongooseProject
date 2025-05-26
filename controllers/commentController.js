const Comment = require('../models/comment');

const getComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments ); 
  } catch (error) {
    res.status(500).send('Erro ao buscar comentários');
  }
};

const postComment = async (req, res) => {
  const {
    texto,
    dataCriacao,
    taskId,
    userId 
  } = req.body;

  const newComment = new Comment({
    texto,
    dataCriacao,
    taskId,
    userId
  });

  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateComment = async (req, res) => {
  const { id } = req.params;
  const { texto, dataCriacao } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { texto, dataCriacao },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comentário não encontrado' });
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comentário não encontrado' });
    }

    res.status(200).json({ message: 'Comentario deletado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComment,
  postComment,
  updateComment,
  deleteComment,
};
