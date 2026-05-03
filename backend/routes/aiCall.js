const express = require('express');
const router = express.Router();
const aiCallController = require('../controllers/aiCallController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', aiCallController.getAiCalls);
router.get('/:id', aiCallController.getAiCallById);
router.post('/', authorize('admin', 'operator'), aiCallController.createAiCall);
router.put('/:id', authorize('admin', 'operator'), aiCallController.updateAiCall);
router.delete('/:id', authorize('admin'), aiCallController.deleteAiCall);

module.exports = router;