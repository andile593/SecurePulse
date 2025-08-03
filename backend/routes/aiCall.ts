import express from 'express';
import * as aiCallController from '../controllers/aiCallController';
import { authenticateToken } from '../middlewares/auth';
import { requireAuth } from '../middleware/auth

const router = express.Router();

router.use(authenticateToken); // protect all aiCall routes

router.post('/', requireAuth(['CONTROLLER', 'ADMIN', 'SUPER_ADMIN']), aiCallController.createAiCall);
router.get('/', aiCallController.getAiCalls);
router.get('/:id', requireAuth(['CONTROLLER', 'ADMIN', 'SUPER_ADMIN']),aiCallController.getAiCallById);
router.put('/:id', requireAuth(['CONTROLLER', 'ADMIN', 'SUPER_ADMIN']), aiCallController.updateAiCall);
router.delete('/:id', requireAuth(['CONTROLLER', 'ADMIN', 'SUPER_ADMIN']), aiCallController.deleteAiCall);

export default router;
