var express = require('express');
var router = express.Router();
const  { getUser, postUser } = require('../controllers/userController')


router.get('/', getUser);
router.post('/', postUser);


module.exports = router;
