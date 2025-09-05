const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const aiDialer = require('../services/aiDialer');

async function handleNewAlarm(id) {
const CALLABLE_EVENTS = ["Burglary Alarm", "Intrusion Alarm"];

  const alarm = await prisma.alarm.findUnique({
    where: { id },
    include: {
      transmitter: {
        include: {
          site: {
            include: {
              client: true, 
            },
          },
        },
      },
    },
  });

  if (!alarm) return;


  if (!CALLABLE_EVENTS.includes(alarm.eventType)) {
    console.log(`Skipping alarm ${alarm.id} with event type ${alarm.eventType}`);
    return;
  }


  const phone = alarm.transmitter?.site?.client?.phone;
  if (!phone) {
    console.warn(`Alarm ${alarm.id} has no client phone number`);
    return;
  }

  await aiDialer.callClient({
    phone,
    context: {
      alarmId: alarm.id,
      siteName: alarm.transmitter.site.name,
      eventType: alarm.eventType,
    },
  });

  
  await prisma.aiCall.create({
    data: {
      alarmId: alarm.id,
      phone,
      aiDecision: "Dialing",
    },
  });

aiDialer.callClient({
    phone: client.phone,
    context: {
      alarmId: alarm.id,
      siteName: alarm.transmitter.site.name,
      eventType: alarm.eventType,
    },
    onResult: async (result) => {
      if (result.type === "cancelled") {
        await prisma.alarm.update({
          where: { id: alarm.id },
          data: { status: "CancelledByClient" },
        });
        await prisma.aiCall.update({
          where: { id: aiCall.id },
          data: { aiDecision: "Cancelled", outcome: result.code },
        });
      } else if (result.type === "unanswered") {
        await prisma.aiCall.update({
          where: { id: aiCall.id },
          data: { aiDecision: "Unanswered" },
        });
        await createDispatch(alarm.id, "No response from client");
      } else if (result.type === "dispatched") {
        await prisma.alarm.update({
          where: { id: alarm.id },
          data: { status: "Dispatched" },
        });
        await prisma.aiCall.update({
          where: { id: aiCall.id },
          data: { aiDecision: "Dispatched" },
        });
        await createDispatch(alarm.id, result.reason);
      }
    },
  });
}

module.exports = { handleNewAlarm };
