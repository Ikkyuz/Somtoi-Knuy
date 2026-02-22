const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const { authenticateToken, authorizeRole } = require ('../Middleware/auth.middleware');

router.use(authenticateToken);

router.post('/',authorizeRole(['ADMIN']) , roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;
