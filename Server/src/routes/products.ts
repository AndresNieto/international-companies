import {Router} from 'express'
import ProductController from '../controller/ProductController';

const router = Router();

router.get('/:category', ProductController.getProducts);

export default router;