import express from 'express';
import * as alarmController from '../controllers/alarmController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // All routes require JWT

router.post('/', alarmController.createAlarm);
router.get('/', alarmController.getAlarms);
router.get('/:id', alarmController.getAlarmById);
router.put('/:id', alarmController.updateAlarm);
router.delete('/:id', alarmController.deleteAlarm);

export default router;
