const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientById);
router.post('/', authorize('admin', 'operator'), clientController.createClient);
router.put('/:id', authorize('admin', 'operator'), clientController.updateClient);
router.delete('/:id', authorize('admin'), clientController.deleteClient);

module.exports = router;