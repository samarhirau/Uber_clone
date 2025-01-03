import { check, validationResult } from 'express-validator';


const validateUser = [
    check('fullName.firstName')
        .isString().withMessage('First Name must be a string.')
        .notEmpty().withMessage('First Name is required.')
        .trim()
        .isLength({ min: 3 }).withMessage('First Name must be at least 3 characters long.'),
       
    check('fullName.lastName')
        .optional()
        .isString().withMessage('Last Name must be a string.')
        .trim()
        .isLength({ min: 3 }).withMessage('Last Name must be at least 3 characters long.'),

    check('email')
        .isEmail().withMessage('Invalid email address.')
        .notEmpty().withMessage('Email is required.')
        .trim(),

    check('password')
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),

    check('sockrtId')
        .optional()
        .isString().withMessage('Socket ID must be a string.')
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


const loginUser = [
    check('email')
        .isEmail().withMessage('Invalid email address.')
        .notEmpty().withMessage('Email is required.')
        .trim(),

    check('password')
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
]; 



export { validateUser, handleValidationErrors , loginUser };

