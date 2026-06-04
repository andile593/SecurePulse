require('dotenv').config();

const express = require("express");
const http = require("http");
const cors = require('cors');
const prisma = require('./utils/prisma');
const errorHandler = require('./middlewares/errorMiddleware');
const { initSocket } = require('./utils/socket');
const { authenticate } = require('./middlewares/authMiddleware');

const app = express();
const server = http.createServer(app);

initSocket(server);

const PORT = process.env.SERVER_PORT || 5000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://secure-pulse.vercel.app",
    "https://securepulse-production-7ee5.up.railway.app"
  ],
  credentials: true,
}));

app.use(express.json());

// Public routes — no auth required
app.use('/api/auth', require('./routes/auth'));

// Protected routes — all require valid JWT
app.use('/api/clients', authenticate, require('./routes/clients'));
app.use('/api/alarms', authenticate, require('./routes/alarms'));
app.use('/api/OBlogs', authenticate, require('./routes/obLogs'));
app.use('/api/sites', authenticate, require('./routes/sites'));
app.use('/api/guards', authenticate, require('./routes/guards'));
app.use('/api/vehicles', authenticate, require('./routes/vehicle'));
app.use('/api/ai-calls', authenticate, require('./routes/aiCall'));
app.use('/api/users', authenticate, require('./routes/user'));
app.use('/api/dispatches', authenticate, require('./routes/dispatch'));
app.use('/api/roles', authenticate, require('./routes/roles'));

app.use(errorHandler);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received — shutting down gracefully');
  server.close(async () => {
    await prisma.$disconnect();
    console.log('Prisma disconnected. Process exiting.');
    process.exit(0);
  });
});

process.on('SIGINT', async () => {
  console.log('SIGINT received — shutting down gracefully');
  server.close(async () => {
    await prisma.$disconnect();
    console.log('Prisma disconnected. Process exiting.');
    process.exit(0);
  });
});

module.exports = { app, server };