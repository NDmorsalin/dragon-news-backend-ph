const User = require("../../Models/user/userModel");

// add user
const addUser = async (req, res) => {
    const { userId, role } = req.body;
    try {
        const user = await User.findOne({ userId: userId });
        if (user) {
            res.status(201).json(user);
        } else {
            const user = new User({
                userId,
                role
            });
            const newUser = await user.save();
            res.status(201).json(newUser);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// get all user
const getAllUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get single user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

// update user
const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (user) {
            user.userId = req.body.userId;
            user.role = req.body.role;
            const updatedUser = await user.save();
            res.json(updatedUser);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (user) {
            await user.remove();
            res.json({ message: 'User removed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}