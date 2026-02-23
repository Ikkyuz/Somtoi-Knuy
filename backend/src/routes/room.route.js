const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const { authenticateToken, authorizeRole } = require ('../Middleware/auth.middleware');

router.use(authenticateToken);

router.post('/'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Create a new room (Admin only)'
    ,authorizeRole(['ADMIN'])
    ,roomController.createRoom);

router.get('/',
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Get all rooms'
    roomController.getAllRooms);

router.put('/:id'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Update a room by ID (Admin only)'
    ,authorizeRole(['ADMIN'])
    ,roomController.updateRoom);
    
router.delete('/:id'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Delete a room by ID (Admin only)'
    ,authorizeRole(['ADMIN'])
    ,roomController.deleteRoom);

module.exports = router;