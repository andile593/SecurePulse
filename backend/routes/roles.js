const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');
const { authorize } = require('../middlewares/authMiddleware');

// Only admins can create roles.
router.post('/', authorize('admin'), rolesController.createRole);

// All authenticated users can view roles.
router.get('/', rolesController.getRoles);

module.exports = router;