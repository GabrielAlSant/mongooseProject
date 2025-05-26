var express = require('express');
var router = express.Router();
const  { getComment, postComment, updateComment, deleteComment } = require('../controllers/commentController')


router.get('/', getComment);
router.post('/', postComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

module.exports = router;
