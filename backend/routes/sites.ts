import express from 'express';
import * as siteController from '../controllers/siteController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // secure all site routes

router.get('/', siteController.getSites);
router.get('/:id', siteController.getSiteById);
router.post('/', siteController.createSite);
router.put('/:id', siteController.updateSite);
router.delete('/:id', siteController.deleteSite);

export default router;
