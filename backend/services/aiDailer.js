
const twilio = require("twilio");

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

async function callClient({ phone, context }) {
  return client.calls.create({
    to: phone,
    from: process.env.TWILIO_NUMBER,
    url: `${process.env.BASE_URL}/twilio/voice?alarmId=${context.alarmId}`,
  });
}
