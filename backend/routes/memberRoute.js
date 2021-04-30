import express from 'express';
import {getMemberById,getMembers,updateMemberById,deleteMemberById,createMember} from '../controllers/memberController'
import { protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getMembers).post(protect,createMember);
router.route('/:id').get(getMemberById).put(protect, updateMemberById).delete(protect,deleteMemberById);

export default router;