const express = require('express');
const router = express.Router();
const alarmController = require('../controllers/alarmController');
const { authorize } = require('../middlewares/authMiddleware');

router.post('/simulate', authorize('admin', 'operator'), alarmController.simulateAlarm);

// All roles can view alarms.
router.get('/', alarmController.getAlarms);
router.get('/:id', alarmController.getAlarmById);

// Only admins and operators can create and update alarms.
router.post('/', authorize('admin', 'operator'), alarmController.createAlarm);
router.put('/:id', authorize('admin', 'operator'), alarmController.updateAlarm);
router.patch('/:id/status', authorize('admin', 'operator'), alarmController.updateAlarmStatus);

// Only admins can delete alarms.
router.delete('/:id', authorize('admin'), alarmController.deleteAlarm);

module.exports = router;