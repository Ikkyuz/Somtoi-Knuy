const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const roomController = require('../controllers/room.controller');
const { authenticateToken, authorizeRole } = require('../Middleware/auth.middleware');

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

router.use(authenticateToken);


router.post('/'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Create a new room (Admin only)'
    , upload.single("image")
    , authorizeRole(['ADMIN'])
    , roomController.createRoom);


    
router.get('/',
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Get all rooms'
    roomController.getAllRooms);
router.get('/:id',
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Get a room by ID'
    roomController.getRoomById);


router.put('/:id'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Update a room by ID (Admin only)'
    , authorizeRole(['ADMIN'])
    , roomController.updateRoom);

router.delete('/:id'
    // #swagger.tags = ['Rooms']
    // #swagger.summary = 'Delete a room by ID (Admin only)'
    , authorizeRole(['ADMIN'])
    , roomController.deleteRoom);

module.exports = router;