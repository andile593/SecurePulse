require('dotenv').config();

const express = require("express");
const { PrismaClient } = require('@prisma/client');
const app = express();
const cors = require('cors');
const errorHandler = require('./middlewares/errorMiddleware');


app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(errorHandler);
app.use((err, req, res, next) => {
  console.error(err); // log the error for debugging

  if (err.name === 'PrismaClientValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
});

const prisma = new PrismaClient();

app.use('/clients', require('./routes/clients'));
app.use('/alarms', require('./routes/alarms'));
app.use('/OBlogs', require('./routes/obLogs'));
app.use('/sites', require('./routes/sites'));
app.use('/guards',  require('./routes/guards'));
app.use('/vehicles', require('./routes/vehicle'));
app.use('/ai-calls', require('./routes/aiCall'));
app.use('/users', require('./routes/user'));
app.use('/dispatches', require('./routes/dispatch'));
app.use('/roles', require('./routes/roles'));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
});
