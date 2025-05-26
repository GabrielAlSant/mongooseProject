var express = require('express');
var router = express.Router();
const  { getUser, postUser, updateUser, deleteUser } = require('../controllers/userController')


router.get('/', getUser);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;