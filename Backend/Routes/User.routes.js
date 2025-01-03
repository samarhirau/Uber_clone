import express from 'express';
import { validateUser, handleValidationErrors } from '../Validations/User.validation.js';
import { registerUser, loginUser } from '../Controllers/User.controller.js';

const router = express.Router();

router.post('/register', validateUser, handleValidationErrors, registerUser);
router.post('/login', loginUser);

export default router;