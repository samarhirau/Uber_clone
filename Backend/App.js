import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './Routes/User.routes.js';
import captainRoutes from './Routes/Captain.routes.js';

const app = express();


const corsOptions = {
    origin: 'http://localhost:5173', // Adjust with your frontend URL
    credentials: true, // Allow credentials (cookies, Authorization headers)
};

app.use(cors(corsOptions));

// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);


app.get('/', (req, res) => {
     res.send('Hello World');
     });

export  {app};