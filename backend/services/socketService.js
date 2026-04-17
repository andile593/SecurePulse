const { getIO } = require('../utils/socket');

function emitAlarmEvent(alarm) {
  const io = getIO();
  io.emit('alarm:new', alarm);
  console.log(`Emitted alarm:new for alarm ${alarm.id}`);
}

function emitAlarmUpdated(alarm) {
  const io = getIO();
  io.emit('alarm:updated', alarm);
  console.log(`Emitted alarm:updated for alarm ${alarm.id}`);
}

module.exports = { emitAlarmEvent, emitAlarmUpdated };
