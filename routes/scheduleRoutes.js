const express = require('express');
const router = express.Router();
const Schedule = require('../models/scheduleModel');

router.get('/', async (req, res) => {
    const schedules = await Schedule.getAll();
    res.json(schedules);
});

router.post('/', async (req, res) => {
    const scheduleData = req.body;
    const result = await Schedule.create(scheduleData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const scheduleData = req.body;
    const result = await Schedule.update(id, scheduleData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Schedule.delete(id);
    res.json(result);
});

module.exports = router;
