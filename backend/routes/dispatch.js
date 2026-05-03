const express = require('express');
const router = express.Router();
const dispatchController = require('../controllers/dispatchController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', dispatchController.getDispatches);
router.get('/:id', authorize('admin', 'operator'), dispatchController.getDispatchById);
router.post('/', authorize('admin', 'operator'), dispatchController.createDispatch);
router.put('/:id', authorize('admin', 'operator'), dispatchController.updateDispatch);
router.delete('/:id', authorize('admin'), dispatchController.deleteDispatch);

module.exports = router;