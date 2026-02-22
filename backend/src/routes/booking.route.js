const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');

router.post('/check-in', bookingController.checkIn);
router.post('/move-out', bookingController.moveOut);

module.exports = router;
