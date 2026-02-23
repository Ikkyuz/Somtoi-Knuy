const e = require('express');
const prisma = require('../provider/database/client');

// 1. เพิ่มห้องพักใหม่
exports.createRoom = async (req, res) => {
  try {
    
    const { roomNo, roomType, price, floor, RoomStatus, description } = req.body;

    const image = req.file ? req.file.filename : null;
    
    const room = await prisma.room.create({
      data: {
        roomNo,
        roomType,
        price: parseFloat(price),
        floor: parseInt(floor),
        description,
        image, // ✅ บันทึกรูป
        RoomStatus
      }
    });

    res.status(201).json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 2. ดึงข้อมูลห้องพักทั้งหมด
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    console.log("params id:", req.params.id);

    const room = await prisma.room.findUnique({
      where: { id: Number(req.params.id) },
    });

    console.log("room:", room);

    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    res.json(room);
  } catch (error) {
    console.error("getRoomById error:", error);
    res.status(500).json({ error: error.message });
  }
};

// 3. แก้ไขข้อมูลห้องพัก
exports.updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { roomNo, roomType, price, floor, status, description } = req.body;

    const room = await prisma.room.update({
      where: { id: parseInt(id) },
      data: {
        roomNo,
        roomType,
        price: price ? parseFloat(price) : undefined,
        floor: floor ? parseInt(floor) : undefined,
        description,
        image,
        status
      }
    });

    res.json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 4. ลบห้องพัก
exports.deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.room.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
