// Importing
const express = require('express');
const cors = require('cors');
const connectDB = require("./connectDB");
const ApplicationRoutes = require('./Routes/ApplicationRoutes');
require("dotenv").config();

// App
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use("/api", ApplicationRoutes);

// DB Connection
connectDB();

// Running The Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Obour CS Club is running now on port: ${PORT}`);
});
