require('dotenv').config();
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.SERVER_PORT || 5000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cuddly-space-goldfish-9wgq65g6w6j27jvj-5173.app.github.dev"
  ],
  credentials: true,
}));

app.use(express.json());
app.use(errorHandler);

app.use('/clients', require('./routes/clients'));
app.use('/alarms', require('./routes/alarms'));
app.use('/OBlogs', require('./routes/obLogs'));
app.use('/sites', require('./routes/sites'));
app.use('/guards', require('./routes/guards'));
app.use('/vehicles', require('./routes/vehicle'));
app.use('/ai-calls', require('./routes/aiCall'));
app.use('/users', require('./routes/user'));
app.use('/dispatches', require('./routes/dispatch'));
app.use('/roles', require('./routes/roles'));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
