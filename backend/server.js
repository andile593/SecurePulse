require('dotenv').config();

const express = require("express");
const { PrismaClient } = require('@prisma/client');
const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.use('/clients', require('./routes/clients'));
app.use('/alarms', require('./routes/alarms'));
app.use('/ob-logs', require('./routes/obLogs'));
app.use('/sites', require('./routes/sites'));
app.use('/guards',  require('./routes/guards'));
app.use('/vehicles', require('./routes/vehicle'));
app.use('/ai-calls', require('./routes/aiCall'));
app.use('/users', require('./routes/user'));
app.use('/dispatches', require('./routes/dispatch'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
});
