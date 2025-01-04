import { CaptainModel } from "../Models/Captain.model.js";


// Register a new captain
const registerCaptain = async (req, res) => {
     try {
          const { email } = req.body;
          const existingCaptain = await CaptainModel.findOne({ email });
          if (existingCaptain) {
               return res.status(400).json({ message: 'Captain already exists!' });
          }
     
          const newCaptain = new CaptainModel(req.body);
          await newCaptain.save();
     console.log("newCaptain :",newCaptain);
     
          const token = newCaptain.generateAuthToken();
          res.status(201).json({ message: 'Captain registered successfully!', token, newCaptain });
     } catch (error) {
          console.error("Error during captain registration:", error.message);
          if (error.name === 'ValidationError') {
               return res.status(400).json({ message: 'Validation failed!', details: error.errors });
          }
          res.status(500).json({ message: 'Something went wrong!', error: error.message });
     }
}


// login captain

const loginCaptain = async (req, res) => {
     const { email, password } = req.body;
     
     try {
          const captain = await CaptainModel.findOne({ email }).select('+password');
          if(!captain){
               return res.status(404).json({ message: 'Invalid credentials!' });
          }
          const isMatch = await captain.isPasswordMatch(password);

          if (!isMatch) {
               return res.status(400).json({ message: 'Invalid credentials!' });
          }

          const token = captain.generateAuthToken();
          res.cookie('token', token);
          return res.status(200).json({ message: 'Captain logged in successfully!', token, captain });
          
     } catch (error) {
          console.error("Error during captain login:", error.message);
          res.status(500).json({ message: 'Something went wrong!', error: error.message });
     }
};


export {registerCaptain , loginCaptain};