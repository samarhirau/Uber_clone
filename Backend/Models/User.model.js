import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const UserSchema  = new Schema({
     fullName: {
         firstName: {
          type: String,
          required: true,
          trim: true,
          minlength: [3, 'First Name must be at least 3 characters long.']
     },
     lastName: {
          type: String,
          trim: true,
          minlength: [3, 'Last Name must be at least 3 characters long.']
}},
     password: {
          type: String,
          required: true,
          minlength: [6, 'Password must be at least 6 characters long.']
     },
     email: {
          type: String,
          required: true,
          unique: true,
          trim: true
     },
     sockrtId: {
          type: String
     },
});

UserSchema.pre("save", async function (next) {
     if (!this.isModified("password")) {
          next();
     }
     this.password = await bcrypt.hash(this.password, 10);
});
 

UserSchema.methods.isPasswordMatch = async function (enteredPassword) {
     return await bcrypt.compare(enteredPassword, this.password);
};


UserSchema.methods.toGenerateAuthToken = function () {
     return jwt.sign({id: this._id,
          email: this.email
     },
           process.env.JWT_SECRET,
           {expiresIn: process.env.JWT_EXPIRE});
};



export const userModel = mongoose.model('User', UserSchema);