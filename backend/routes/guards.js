const express = require('express');
const router = express.Router();
const guardController = require('../controllers/guardController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', guardController.getGuards);
router.get('/:id', guardController.getGuardById);
router.post('/', authorize('admin', 'operator'), guardController.createGuard);
router.put('/:id', authorize('admin', 'operator'), guardController.updateGuard);
router.delete('/:id', authorize('admin'), guardController.deleteGuard);

module.exports = router;