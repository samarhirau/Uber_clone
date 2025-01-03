import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './Routes/User.routes.js';

const app = express();


app.use(cors());
app.use(cookieParser());
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
     res.send('Hello World');
     });

export  {app};