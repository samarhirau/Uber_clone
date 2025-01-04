import express from 'express';
import { validateCaptain, handleValidationErrors   } from '../Validations/Captain.validation.js';
import { registerCaptain , loginCaptain , logoutCaptain , authProfile} from '../Controllers/Captain.controller.js';
import { authCaptain } from '../Middleware/Auth.middleware.js';

const router = express.Router();


router.post('/register', validateCaptain, handleValidationErrors , registerCaptain);
router.post('/login',  loginCaptain);
router.post('/logout',  logoutCaptain);
router.get('/profile',authCaptain, authProfile);

export default router;