var express = require('express');
var router = express.Router();
const  { getComment, postComment } = require('../controllers/commentController')


router.get('/', getComment);
router.post('/', postComment);


module.exports = router;
