const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 📂 JSON File Storage Path
const DATA_FILE = path.join(__dirname, "messages.json");

// 📧 Configure Nodemailer
const transporter = nodemailer.createTransport({
service: "Gmail",
auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
},
});

// 📩 Contact Us Route
app.post("/api/contact", (req, res) => {
const { name, email, message } = req.body;

  // 1️⃣ Save Message to JSON File
const newMessage = { name, email, message, timestamp: new Date() };

  // Read existing messages
fs.readFile(DATA_FILE, "utf8", (err, data) => {
    const messages = data ? JSON.parse(data) : [];
    messages.push(newMessage);

    // Write updated messages back to file
    fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), (err) => {
    if (err) {
        console.error("Error saving message:", err);
        return res.status(500).json({ success: false, message: "Failed to save message." });
    }

      // 2️⃣ Send Email to Support
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "support@glamblushup.com",
        subject: "New Contact Us Message",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send email." });
        }

        res.status(200).json({ success: true, message: "Message sent successfully!" });
    });
    });
});
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));