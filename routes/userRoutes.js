const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', async (req, res) => {
    const users = await User.getAll();
    res.json(users);
});

router.post('/', async (req, res) => {
    const userData = req.body;
    const result = await User.create(userData);
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    const result = await User.update(id, userData);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await User.delete(id);
    res.json(result);
});

module.exports = router;
