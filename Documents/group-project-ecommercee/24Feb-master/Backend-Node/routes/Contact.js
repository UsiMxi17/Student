const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

// 📧 Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail", // You can also use Outlook, Yahoo, or SMTP provider
auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // App password (not your regular email password)
},
});

// 📩 Route to handle form submission
router.post("/", async (req, res) => {
try {
    const { name, email, message } = req.body;

    // 1️⃣ Save to Database
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // 2️⃣ Send Email Notification to Support
    const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "support@glamblushup.com",
    subject: "New Contact Us Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });

} catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
}
});

module.exports = router;
