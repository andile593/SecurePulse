const express = require('express');
const router = express.Router();
const alarmController = require('../controllers/alarmController');

router.post('/', alarmController.createAlarm);
router.get('/', alarmController.getAlarms);
router.get('/:id', alarmController.getAlarmById);
router.put('/:id', alarmController.updateAlarm);
router.delete('/:id', alarmController.deleteAlarm);

module.exports = router;
