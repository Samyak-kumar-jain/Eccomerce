const express = require("express");
const app = express();
const connectToDatabase = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/authrotes");
const adminRouter = require("./routes/Product/Products_routes");
const shopRouter = require("./routes/Shop/Shoproutes");
const cartRouter = require("./routes/Cart/cartRoutes");
const adressRouter = require("./routes/Shop/Adreesroutes");
const ReviewRouter = require("./routes/Review/ReviewRoutes");
require("dotenv").config();

const port = process.env.PORT || 5000;

// Connect to database
connectToDatabase();

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Development URL
  process.env.CLIENT_SIDE_URL, // Production URL
];

// CORS Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminRouter);
app.use("/api/shop/products", shopRouter);
app.use("/api/shop/cart", cartRouter);
app.use("/api/shop/address", adressRouter);
app.use("/api/shop/review", ReviewRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
