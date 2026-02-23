const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.controller");
const { authenticateToken, authorizeRole } = require('../Middleware/auth.middleware');

router.use(authenticateToken);

// Check-in
router.post(
  "/check-in"
  // #swagger.tags = ['Bookings']
  // #swagger.summary = 'Check-in a room'
  , authorizeRole(['USER', 'ADMIN']),
  bookingController.checkIn
);

// Check-out
router.post(
  "/check-out"
  // #swagger.tags = ['Bookings']
  // #swagger.summary = 'Check-out a room'
  ,authorizeRole(['USER', 'ADMIN']),
  bookingController.checkOut
);

// My bookings (ดึงเฉพาะของ user ที่ login)
router.get(
  "/my-bookings"
  // #swagger.tags = ['Bookings']
  // #swagger.summary = 'Get my bookings'
  ,authorizeRole(['USER', 'ADMIN']),
  bookingController.getMyBookings
);

module.exports = router;