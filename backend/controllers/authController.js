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

async function getAdmins(req, res, next) {
  try {
    const admins = await authService.getAdmins();
    res.json(admins);
  } catch (error) {
    next(error)
  }
}

async function getAdminById(req, res, next) {
  try {
    const admin = await authService.getAdminById(req.params.id);
    if (!admin) return res.status(404).json({ error: "Admin not found"})
    res.json(admin)
  } catch (error) {
    next(error)
  }
}

async function updateAdmin(req, res, next) {
  try {
    const { name, email, roleId } = req.body;
    const updated = await authService.updateAdmin(req.params.id, { name, email, roleId });
    if (!updated) return res.status(404).json({ error: 'Admin not found' });
    res.json(updated);
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

module.exports = { register, login };