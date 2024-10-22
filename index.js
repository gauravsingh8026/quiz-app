// app.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
// console.log(process.env);
// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use("/api/questions", require("./routes/questions"));

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
