import express from 'express';
import { validateCaptain, handleValidationErrors   } from '../Validations/Captain.validation.js';
import { registerCaptain , loginCaptain } from '../Controllers/Captain.controller.js';

const router = express.Router();


router.post('/register', validateCaptain, handleValidationErrors , registerCaptain);
router.post('/login',  loginCaptain);

export default router;