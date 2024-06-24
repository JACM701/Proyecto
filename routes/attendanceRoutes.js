const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceModel');

router.get('/', async (req, res) => {
    const attendance = await Attendance.getAll();
    res.json(attendance);
});

router.post('/', async (req, res) => {
    const attendanceData = req.body;
    const result = await Attendance.create(attendanceData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const attendanceData = req.body;
    const result = await Attendance.update(id, attendanceData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Attendance.delete(id);
    res.json(result);
});

module.exports = router;
