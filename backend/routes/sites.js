const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const { authorize } = require('../middlewares/authMiddleware');

router.get('/', siteController.getSites);
router.get('/:id', siteController.getSiteById);
router.post('/', authorize('admin', 'operator'), siteController.createSite);
router.put('/:id', authorize('admin', 'operator'), siteController.updateSite);
router.delete('/:id', authorize('admin'), siteController.deleteSite);

module.exports = router;