import {Router} from 'express'
import ContactController from '../controller/ContactController';

const router = Router();

router.post('', ContactController.sendContactInfo);

export default router;