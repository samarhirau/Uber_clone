import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const CaptainSchema  = new mongoose.Schema({
     fullName: {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
            lastName: {
               type: String,
               trim: true,
               minLength: [3, 'Last name must be at least 3 characters long'],
            },
            },
     email: {
         type: String,  
         required: true,
         trim: true,
         unique: true,
         lowercase: true,
     },
     password: {
         type: String,
         required: true,
         trim: true,
         minLength: 6,
     },
     socketId: {
         type: String,
     },
     status: {
         type: String,
         enum: ['available', 'busy', 'offline'],
         default: 'offline',
     },
     vehicle: {
       color :{
          type : String,
          required: true,
          minLength: [3, 'Color must be at least 3 characters long'],

       },
       plate:{
               type: String,
               required: true,
               minLength: [3, 'Plate must be at least 3 characters long'],
       },
       capacity:{
               type: Number,
               required: true,
               min: [1, 'Capacity must be at least 1'],
       }, 
       vehicleType:{
               type: String,
               required: true,
               enum: ['car', 'van', 'bike'],
       },
       location:{
          lat: {
               type: Number,
               required: true,
          },
          lng: {
               type: Number,
               required: true,
          },
       }
     },
});

CaptainSchema.methods.generateAuthToken = function () {
     return jwt.sign(
          { id: this._id, email: this.email },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRE }
     );
}

CaptainSchema.methods.isPasswordMatch = async function (password) {
     return await bcrypt.compare(password, this.password);
}

CaptainSchema.pre('save', async function (next) {
     if (!this.isModified('password')) {
          next();
     }

     this.password = await bcrypt.hash(this.password, 10);
});




const CaptainModel = mongoose.model('Captain', CaptainSchema);

export { CaptainModel };
