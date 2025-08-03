import express from 'express';
import * as guardController from '../controllers/guardController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // All guard routes require JWT

router.post('/', guardController.createGuard);
router.get('/', guardController.getGuards);
router.get('/:id', guardController.getGuardById);
router.put('/:id', guardController.updateGuard);
router.delete('/:id', guardController.deleteGuard);

export default router;
