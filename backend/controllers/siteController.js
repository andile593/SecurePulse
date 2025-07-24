const siteService = require('../services/siteService');

async function createSite(req, res) {
  try {
    const site = await siteService.createSite(req.body);
    res.status(201).json(site);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getSites(req, res) {
  try {
    const sites = await siteService.getAllSites();
    res.json(sites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSiteById(req, res) {
  try {
    const site = await siteService.getSiteById(req.params.id);
    if (!site) return res.status(404).json({ error: 'Site not found' });
    res.json(site);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSite(req, res) {
  try {
    const updated = await siteService.updateSite(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Site not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteSite(req, res) {
  try {
    const deleted = await siteService.deleteSite(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Site not found' });
    res.json({ message: 'Site deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createSite,
  getSites,
  getSiteById,
  updateSite,
  deleteSite
};
