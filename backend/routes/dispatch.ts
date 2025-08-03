import express from 'express';
import * as dispatchController from '../controllers/dispatchController';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use(authenticateToken); // all dispatch routes require JWT

router.post('/', dispatchController.createDispatch);
router.get('/', dispatchController.getDispatches);
router.get('/:id', dispatchController.getDispatchById);
router.put('/:id', dispatchController.updateDispatch);
router.delete('/:id', dispatchController.deleteDispatch);

export default router;
