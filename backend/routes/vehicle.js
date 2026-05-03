const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', vehicleController.getVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', authorize('admin', 'operator'), vehicleController.createVehicle);
router.put('/:id', authorize('admin', 'operator'), vehicleController.updateVehicle);
router.delete('/:id', authorize('admin'), vehicleController.deleteVehicle);

module.exports = router;