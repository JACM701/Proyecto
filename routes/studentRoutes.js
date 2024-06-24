const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

router.get('/', async (req, res) => {
    const students = await Student.getAll();
    res.json(students);
});

router.post('/', async (req, res) => {
    const studentData = req.body;
    const result = await Student.create(studentData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const studentData = req.body;
    const result = await Student.update(id, studentData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Student.delete(id);
    res.json(result);
});

module.exports = router;
