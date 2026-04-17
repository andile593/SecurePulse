const prisma = require('../utils/prisma');

const CALLABLE_EVENTS = ["Burglary Alarm", "Intrusion Alarm"];

async function handleNewAlarm(alarm) {
  if (!alarm) return;

  if (!CALLABLE_EVENTS.includes(alarm.eventType)) {
    console.log(`Skipping alarm ${alarm.id} — event type: ${alarm.eventType}`);
    return;
  }

  const phone = alarm.transmitter?.site?.client?.phone;

  if (!phone) {
    console.warn(`Alarm ${alarm.id} has no client phone number — skipping AI call`);
    return;
  }

  await prisma.aiCall.create({
    data: {
      alarmId: alarm.id,
      phone,
      aiDecision: "Dialing",
    },
  });
}

module.exports = { handleNewAlarm };
