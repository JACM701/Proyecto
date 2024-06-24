const express = require('express');
const router = express.Router();
const Enrollment = require('../models/enrollmentModel');

router.get('/', async (req, res) => {
    const enrollments = await Enrollment.getAll();
    res.json(enrollments);
});

router.post('/', async (req, res) => {
    const enrollmentData = req.body;
    const result = await Enrollment.create(enrollmentData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const enrollmentData = req.body;
    const result = await Enrollment.update(id, enrollmentData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Enrollment.delete(id);
    res.json(result);
});

module.exports = router;
