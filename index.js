// app.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// API Key Middleware
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"]; // Get API key from request headers
  const validApiKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
  next(); // Proceed if the API key is valid
};

// console.log(process.env);
// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(apiKeyMiddleware);
app.use(express.json());

// Define routes
app.use("/api/questions", apiKeyMiddleware, require("./routes/questions"));

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
