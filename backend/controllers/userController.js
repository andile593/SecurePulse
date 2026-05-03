const userService = require('../services/userService');

async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { name, email, roleId } = req.body;
    const updated = await userService.updateUser(req.params.id, { name, email, roleId });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};