const siteService = require('../services/siteService');

async function createSite(req, res, next) {
  try {
    const site = await siteService.createSite(req.body);
    res.status(201).json(site);
  } catch (error) {
    next(error);
  }
}

async function getSites(req, res, next) {
  try {
    const sites = await siteService.getAllSites();
    res.json(sites);
  } catch (error) {
    next(error);
  }
}

async function getSiteById(req, res, next) {
  try {
    const site = await siteService.getSiteById(req.params.id);
    if (!site) return res.status(404).json({ error: 'Site not found' });
    res.json(site);
  } catch (error) {
    next(error);
  }
}

async function updateSite(req, res, next) {
  try {
    const updated = await siteService.updateSite(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Site not found' });
    res.json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteSite(req, res, next) {
  try {
    const deleted = await siteService.deleteSite(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Site not found' });
    res.json({ message: 'Site deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSite,
  getSites,
  getSiteById,
  updateSite,
  deleteSite
};
