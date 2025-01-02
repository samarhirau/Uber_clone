import mongoose from "mongoose";
import { DbName } from "../Contstant.js";


const connectDB = async () => {
     try {
          const ConnectionInstance  = await mongoose.connect(`${process.env.MONGO_URI}/${DbName}`);
          console.log(`Database Connected: ${ConnectionInstance.connection.host}`);
     } catch (error) {
          console.log(`Database Connection Error: ${error.message}`);
          process.exit(1);
          
     }
}

export default connectDB;