function errorHandler(err, req, res, next) {
  console.error("Error:", err);

  // Handle Prisma unique constraint error (P2002)
  if (err.code === 'P2002') {
    return res.status(409).json({ error: 'Duplicate entry detected' });
  }

  // Handle not found errors that you might throw manually
  if (err.statusCode && err.statusCode >= 400 && err.statusCode < 600) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Fallback to 500 Internal Server Error
  res.status(500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;
