import { userModel } from "../Models/User.model.js";
import {BlacklistedToken} from "../Models/BlacklistToken.model.js";

const registerUser = async (req, res) => {


     try {
            const { email } = req.body;
         const existingUser = await userModel.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists!' });
            }

         const newUser = new userModel(req.body);
         await newUser.save();

         const token = newUser.toGenerateAuthToken();
         res.status(201).json({ message: 'User registered successfully!',token, newUser });
     } catch (error) {
         console.error("Error during user registration:", error.message);
         if (error.name === 'ValidationError') {
             return res.status(400).json({ message: 'Validation failed!', details: error.errors });
         }
         res.status(500).json({ message: 'Something went wrong!', error: error.message });
     }
 };


// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials!' });
        }

        const isMatch = await user.isPasswordMatch(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const token = user.toGenerateAuthToken();

        // Set cookie before sending the response
        res.cookie('token', token);

        // {
        //     httpOnly: true, // Ensures cookie is not accessible via JavaScript
        //     secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
        //     maxAge: 24 * 60 * 60 * 1000, // Cookie expiration in milliseconds (e.g., 1 day)
        // }

        return res.status(200).json({ 
            message: 'User logged in successfully!', 
            token, 
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
            } 
        });
    } catch (error) {
        console.error("Error during user login:", error.message);
        return res.status(500).json({ message: 'Something went wrong!', error: error.message });
    }
};

 


const authProfile = async (req, res) => {
    res.status(200).json({ message: 'User profile fetched successfully!', user: req.user });
};


const logoutUser = async (req, res) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    const blacklistedToken = new BlacklistedToken({ token });
    await blacklistedToken.save();
    res.status(200).json({ message: 'User logged out successfully!' });
};



export { registerUser, loginUser , authProfile , logoutUser};


