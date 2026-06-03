const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.get('/', authController.getAdmins)
router.get('/:id', authController.getAdminById)
router.put('/:id', authController.updateAdmin)
router.post('/login', authController.login);

module.exports = router;