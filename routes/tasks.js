var express = require('express');
var router = express.Router();
const  { getTask, postTask } = require('../controllers/taskController')


router.get('/', getTask);
router.post('/', postTask);


module.exports = router;
