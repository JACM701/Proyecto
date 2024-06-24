const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const UserController = {};

UserController.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({ name, email, password: hashedPassword });
        if (result) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
};

module.exports = UserController;
