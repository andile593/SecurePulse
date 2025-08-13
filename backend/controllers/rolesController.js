const roleService = require('../services/roleService');

async function getRoles(req, res, next) {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getRoles,
};