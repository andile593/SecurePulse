const express = require("express");
const router = express.Router();
const { VoiceResponse } = require("twilio").twiml;

router.post("/voice", (req, res) => {
  const twiml = new VoiceResponse();

  // Connect Twilio voice stream to your GPT agent via WebSocket
  const connect = twiml.connect();
  connect.stream({ url: `${process.env.BASE_URL}/gpt-stream` });

  res.type("text/xml");
  res.send(twiml.toString());
});

module.exports = router;