import { CaptainModel } from "../Models/Captain.model.js";
import {userModel} from "../Models/User.model.js"
import {BlacklistedToken} from "../Models/BlacklistToken.model.js";
import jwt from "jsonwebtoken";





const authUser = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = 
            req.cookies.token || 
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Authorization denied! No token provided.' });
        }

        // Check if the token is blacklisted
        const isTokenBlacklisted = await BlacklistedToken.findOne({ token });
        if (isTokenBlacklisted) {
            return res.status(401).json({ message: 'Authorization denied! Token is blacklisted.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id);

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error during user authorization:", error.message);
        return res.status(401).json({ message: 'Authorization denied! Invalid token.' });
    }
};





const authCaptain = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token = 
            req.cookies.token || 
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Authorization denied! No token provided.' });
        }

        // Check if the token is blacklisted
        const isTokenBlacklisted = await BlacklistedToken.findOne({ token });
        if (isTokenBlacklisted) {
            return res.status(401).json({ message: 'Authorization denied! Token is blacklisted.' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.captain = await CaptainModel.findById(decoded.id);

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error during captain authorization:", error.message);
        return res.status(401).json({ message: 'Authorization denied! Invalid token.' });
    }
}

 

export { authUser , authCaptain };