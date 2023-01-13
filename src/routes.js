import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserContreller from './app/controllers/UserContreller';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';

import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserContreller.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);


routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);


routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);





export default routes;
