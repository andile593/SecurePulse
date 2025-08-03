import express from 'express';
import * as userController from '../controllers/userController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // protect all user routes

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser); // optional, admin-only
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
