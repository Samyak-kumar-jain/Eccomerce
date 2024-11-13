const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectToDatabase = require('./db');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/authrotes')
const adminRouter = require('./routes/Product/Products_routes')
const shopRouter = require("./routes/Shop/Shoproutes")
const cartRouter = require("./routes/Cart/cartRoutes")
const adressRouter = require("./routes/Shop/Adreesroutes")
const ReviewRouter = require("./routes/Review/ReviewRoutes")
require("dotenv").config();

const port = process.env.port || 5000;

connectToDatabase();
app.use(
    cors({
        origin: process.env.CLIENT_SIDE_URL,
        methods: ['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authprization",
            "Cache-control",
            "Expires",
            "Pragma",
        ],
        credentials:true,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products',adminRouter)
app.use('/api/shop/products' , shopRouter );
app.use('/api/shop/cart',cartRouter);
app.use('/api/shop/address',adressRouter);
app.use('/api/shop/review', ReviewRouter)


 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});