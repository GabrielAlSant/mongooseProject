var express = require('express');
var router = express.Router();
const  { getLog, postLog, updateLog, deleteLog } = require('../controllers/logController')


router.get('/', getLog);
router.post('/', postLog);
router.put('/:id', updateLog);
router.delete('/:id', deleteLog);

module.exports = router;
