import { Router } from 'express';
import contact from './contact';
import products from './products';

const routes = Router();

routes.use('/contact', contact);
routes.use('/products', products);

export default routes;