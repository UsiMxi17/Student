const pool = require('../config/db');

// Create a booking
exports.createBooking = async (req, res) => {
    try {
        const { name, email, booking_date, booking_time, stylist, comments } = req.body;
        const sql = `INSERT INTO bookings (name, email, booking_date, booking_time, stylist, comments) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [name, email, booking_date, booking_time, stylist, comments];

        const [result] = await pool.execute(sql, values);
        res.status(201).json({ message: 'Booking confirmed', bookingId: result.insertId });
    } catch (err) {
        console.error('Error inserting booking:', err);
        res.status(500).json({ message: 'Failed to book stylist' });
    }
};

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        const [results] = await pool.execute('SELECT * FROM bookings');
        res.json(results);
    } catch (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({ message: 'Failed to fetch bookings' });
    }
};
