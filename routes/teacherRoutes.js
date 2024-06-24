const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacherModel');

router.get('/', async (req, res) => {
    const teachers = await Teacher.getAll();
    res.json(teachers);
});

router.post('/', async (req, res) => {
    const teacherData = req.body;
    const result = await Teacher.create(teacherData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const teacherData = req.body;
    const result = await Teacher.update(id, teacherData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Teacher.delete(id);
    res.json(result);
});

module.exports = router;
