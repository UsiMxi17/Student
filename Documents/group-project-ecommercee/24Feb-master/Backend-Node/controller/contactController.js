const pool = require('../config/db');

// Handle Contact Form Submission
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const sql = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
        const values = [name, email, message];

        const [result] = await pool.execute(sql, values);
        res.status(201).json({ message: 'Message sent successfully', contactId: result.insertId });
    } catch (err) {
        console.error('Error submitting contact form:', err);
        res.status(500).json({ message: 'Failed to send message' });
    }
};

// Get all Contact Us messages
exports.getContactMessages = async (req, res) => {
    try {
        const [results] = await pool.execute('SELECT * FROM messages');
        res.json(results);
    } catch (err) {
        console.error('Error fetching contact messages:', err);
        res.status(500).json({ message: 'Failed to fetch messages' });
    }
};