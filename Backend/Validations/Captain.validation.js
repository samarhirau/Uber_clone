import { check, validationResult } from 'express-validator';


const validateCaptain = [
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
          .isString().withMessage('Socket ID must be a string.'),

     check('vehicle.color')
          .isString().withMessage('Color must be a string.')
          .notEmpty().withMessage('Color is required.')
          .trim()
          .isLength({ min: 3 }).withMessage('Color must be at least 3 characters long.'),
          
     check('vehicle.plate')
          .isString().withMessage('Plate must be a string.')
          .notEmpty().withMessage('Plate is required.')
          .trim()
          .isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long.'),

     check('vehicle.capacity')
          .isNumeric().withMessage('Capacity must be a number.')
          .notEmpty().withMessage('Capacity is required.')
          .isLength({ min: 1 }).withMessage('Capacity must be at least 1.'),

     check('vehicle.vehicleType')
          .isString().withMessage('Vehicle Type must be a string.')
          .notEmpty().withMessage('Vehicle Type is required.')
          .isIn(['car', 'van', 'bike']).withMessage('Invalid Vehicle Type.'),

     check('vehicle.location.lat')
          .isNumeric().withMessage('Latitude must be a number.')
          .notEmpty().withMessage('Latitude is required.'),

     check('vehicle.location.lng')
          .isNumeric().withMessage('Longitude must be a number.')
          .notEmpty().withMessage('Longitude is required.')
     ];


     const handleValidationErrors = (req, res, next) =>{
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
          }
          next();
      };
     

 export { validateCaptain, handleValidationErrors };   