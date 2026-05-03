function errorHandler(err, req, res, next) {
  console.error("Error:", err);


  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Duplicate entry detected' });
  }

  if (err.code === 'P2025') {
    return res.status(404).json({ error: 'Record not found' });
  }

  if (err.code === 'P2003') {
    return res.status(400).json({ error: 'Invalid reference — related record does not exist' });
  }

  if (err.statusCode && err.statusCode >= 400 && err.statusCode < 600) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  const message = process.env.NODE_ENV === 'production'
    ? 'Internal Server Error'
    : err.message || 'Internal Server Error';

  res.status(500).json({ error: message });
}

module.exports = errorHandler;