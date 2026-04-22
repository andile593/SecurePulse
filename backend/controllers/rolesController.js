const roleService = require('../services/roleService');

async function createRole (req, res, next) {
  try {
    const role = await roleService.createRole(req.body)
    res.status(201).json(role)
  } catch (error) {
    next(error)
  }
}


async function getRoles(req, res, next) {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createRole,
  getRoles
};