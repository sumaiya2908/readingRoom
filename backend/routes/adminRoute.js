import express from 'express';
import { authUser, getAdminById} from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', authUser);
router.route('/:id').get(protect, getAdminById);

export default router;