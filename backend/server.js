require('dotenv').config();

const express = require("express");
const http = require("http");
const cors = require('cors');
const prisma = require('./utils/prisma');
const errorHandler = require('./middlewares/errorMiddleware');

const { initSocket } = require('./utils/socket');

const app = express();

const server = http.createServer(app);

initSocket(server);

const PORT = process.env.SERVER_PORT || 5000;

// CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cuddly-space-goldfish-9wgq65g6w6j27jvj-5173.app.github.dev"
  ],
  credentials: true,
}));


app.use(express.json());

app.use((req, res, next) => {
  next();
});
// Routes
app.use('/api/clients', require('./routes/clients'));
app.use('/api/alarms', require('./routes/alarms'));
app.use('/api/OBlogs', require('./routes/obLogs'));
app.use('/api/sites', require('./routes/sites'));
app.use('/api/guards', require('./routes/guards'));
app.use('/api/vehicles', require('./routes/vehicle'));
app.use('/api/ai-calls', require('./routes/aiCall'));
app.use('/api/users', require('./routes/user'));
app.use('/api/dispatches', require('./routes/dispatch'));
app.use('/api/roles', require('./routes/roles'));

// Error handler — must stay last
app.use(errorHandler);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Graceful shutdown
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
