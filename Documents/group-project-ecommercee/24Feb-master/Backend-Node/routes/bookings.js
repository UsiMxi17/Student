const express = require('express');
const router = express.Router();
const bookingsController = require('../controller/bookingsController');

router.post('/book-stylist', bookingsController.createBooking);
router.get('/bookings', bookingsController.getBookings);

module.exports = router;