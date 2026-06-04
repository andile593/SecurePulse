const authService = require('../services/authService');

async function register(req, res, next) {
  try {
    const { name, email, password, roleId } = req.body;

    if (!name || !email || !password || !roleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = await authService.register({ name, email, password, roleId });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const result = await authService.login({ email, password });
    res.json(result);
  } catch (error) {
    next(error);
  }
}

// CHANGED: Update logged-in user's own profile
// Only updates fields that are provided — all optional
async function updateMe(req, res, next) {
  try {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
      return res.status(400).json({ error: 'Provide at least one field to update' });
    }

    const updated = await authService.updateMe(req.user.id, { name, email, password });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login, updateMe };