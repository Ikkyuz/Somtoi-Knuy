const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.post('/check-in'
    // #swagger.tags = ['Bookings']
    // #swagger.summary = 'Check-in a room'
    , bookingController.checkIn);

router.post('/check-out'
    // #swagger.tags = ['Bookings']
    // #swagger.summary = 'Check-out a room'
    , bookingController.checkOut);

module.exports = router;
