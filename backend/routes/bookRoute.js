import express from 'express';
import {getBookById,getBooks,deleteBookById,updateBookById,createBook} from '../controllers/bookController'
import { protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBooks).post(protect,createBook);
router.route('/:id').get(getBookById).put(protect, updateBookById).delete(protect,deleteBookById);

export default router;