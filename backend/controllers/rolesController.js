const roleService = require('../services/roleService');

async function getRoles(req, res) {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  getRoles,
};