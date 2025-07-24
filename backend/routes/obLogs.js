const express = require('express');
const router = express.Router();
const obLogController = require('../controllers/obLogController');

router.get('/', obLogController.getAllObLogs);
router.get('/:id', obLogController.getObLogById);
router.post('/', obLogController.createObLog);
router.put('/:id', obLogController.updateObLog);
router.delete('/:id', obLogController.deleteObLog);

module.exports = router;
