import express from 'express';
import * as aiCallController from '../controllers/aiCallController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // protect all aiCall routes

router.post('/', aiCallController.createAiCall);
router.get('/', aiCallController.getAiCalls);
router.get('/:id', aiCallController.getAiCallById);
router.put('/:id', aiCallController.updateAiCall);
router.delete('/:id', aiCallController.deleteAiCall);

export default router;
