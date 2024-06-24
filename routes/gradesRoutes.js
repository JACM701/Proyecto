const express = require('express');
const router = express.Router();
const Grades = require('../models/gradesModel');

router.get('/', async (req, res) => {
    const grades = await Grades.getAll();
    res.json(grades);
});

router.post('/', async (req, res) => {
    const gradeData = req.body;
    const result = await Grades.create(gradeData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const gradeData = req.body;
    const result = await Grades.update(id, gradeData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Grades.delete(id);
    res.json(result);
});

module.exports = router;
