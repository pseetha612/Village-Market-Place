const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const villageRoutes = require("./routes/villageRoutes");

// Use Routes
app.use("/api/villages", villageRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/village_marketplace")
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });