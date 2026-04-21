function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Duplicate entry detected' });
  }

  if (err.code === 'ENOENT' || err.code === 'ECONNREFUSED') {
    return res.status(503).json({ error: 'Database connection failed' });
  }

  if (err.statusCode && err.statusCode >= 400 && err.statusCode < 600) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;