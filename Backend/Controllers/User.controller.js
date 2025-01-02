import { userModel } from "../Models/User.model.js";

const registerUser = async (req, res) => {
     try {
         console.log("Request Body:", req.body);
         const newUser = new userModel(req.body);
         await newUser.save();
         res.status(201).json({ message: 'User registered successfully!', newUser });
     } catch (error) {
         console.error("Error during user registration:", error.message);
         if (error.name === 'ValidationError') {
             return res.status(400).json({ message: 'Validation failed!', details: error.errors });
         }
         res.status(500).json({ message: 'Something went wrong!', error: error.message });
     }
 };
 

export { registerUser };
