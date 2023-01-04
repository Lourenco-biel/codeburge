import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserContreller from './app/controllers/UserContreller';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserContreller.store);
routes.post('/sessions', SessionController.store);
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);



export default routes;
