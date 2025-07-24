const express = require('express');
const router = express.Router();
const aiCallController = require('../controllers/aiCallController');

router.post('/', aiCallController.createAiCall);
router.get('/', aiCallController.getAiCalls);
router.get('/:id', aiCallController.getAiCallById);
router.put('/:id', aiCallController.updateAiCall);
router.delete('/:id', aiCallController.deleteAiCall);

module.exports = router;
