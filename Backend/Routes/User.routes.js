import express from 'express';
import { validateUser, handleValidationErrors } from '../Validations/User.validation.js';
import { registerUser, loginUser ,authProfile , logoutUser } from '../Controllers/User.controller.js';
import { authUser } from '../Middleware/Auth.middleware.js';

const router = express.Router();

router.post('/register', validateUser, handleValidationErrors, registerUser);
router.post('/login', loginUser);
router.get('/profile', authUser ,authProfile);
router.get('/logout', authUser, logoutUser);

export default router;