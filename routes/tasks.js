var express = require('express');
var router = express.Router();
const  { getTask, updateStatusTask,getOneTaskStatus,postTask, updateTask, deleteTask } = require('../controllers/taskController')


router.get('/', getTask);
router.get('/status/:id', getOneTaskStatus);
router.post('/', postTask);
router.put('/:id', updateTask);
router.put('/status/:id', updateStatusTask);
router.delete('/:id', deleteTask);



module.exports = router;
