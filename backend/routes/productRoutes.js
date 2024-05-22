import express from 'express';
import {
    createProduct, 
    getProducts, 
    getProductsById, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getTopProducts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect,admin,createProduct);
router.get('/top',getTopProducts);
router
    .route('/:id')
    .get(getProductsById)
    .put(protect,admin,updateProduct)
    .delete(protect,admin,deleteProduct)
router.route('/:id/reviews').post(protect,createProductReview);


export default router;