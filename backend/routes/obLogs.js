const express = require('express');
const router = express.Router();
const obLogController = require('../controllers/obLogController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', obLogController.getAllObLogs);
router.get('/:id', obLogController.getObLogById);
router.post('/', authorize('admin', 'operator'), obLogController.createObLog);
router.put('/:id', authorize('admin', 'operator'), obLogController.updateObLog);
router.delete('/:id', authorize('admin'), obLogController.deleteObLog);

module.exports = router;