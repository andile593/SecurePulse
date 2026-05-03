function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Duplicate entry detected' });
  }

  if (err.statusCode && err.statusCode >= 400 && err.statusCode < 600) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // CHANGED: Never expose stack traces in production.
  const message = process.env.NODE_ENV === 'production'
    ? 'Internal Server Error'
    : err.message || 'Internal Server Error';

  res.status(500).json({ error: message });
}

module.exports = errorHandler;