import dotenv from 'dotenv';
dotenv.config();


import {app} from './app.js';
import connectDB from './DB/Db.js';

const Port = process.env.PORT || 5000;

connectDB()
.then(() => {
     app.listen(Port, () => {
          console.log(`Server is running on port ${Port}`);
     });
})
.catch((error) => {
     console.log(`Database Connection Error: ${error.message}`);
     process.exit(1);
});
