var express = require('express');
var router = express.Router();
const  { getLog, postLog } = require('../controllers/logController')


router.get('/', getLog);
router.post('/', postLog);


module.exports = router;
