import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config(); 
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 1234;

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Cookie parser middleware
app.use(cookieParser());

app.get('/',(req,res) => {
    res.send('API is running!');
});

app.use('/api/products', productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

app.use('/api/config/paypal',(req,res) => res.send({
    clientId: process.env.PAYPAL_CLIENT_ID
}))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});