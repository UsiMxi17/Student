require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { logger, errorHandler } = require("./middleware"); // Import middleware

const bookingsRoutes = require("./routes/bookings");
const contactRoutes = require("./routes/Contact.js");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(logger); // Logs all requests

// Routes
app.use('/api', bookingsRoutes);
app.use('/api', contactRoutes);

// Global Error Handling Middleware (always at the end)
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));