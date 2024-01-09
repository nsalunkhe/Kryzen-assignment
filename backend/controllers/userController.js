const User = require('../models/userModel');

const updateUser = async (req, res) => {
  try {
    const { userId } = req.user; 

    // Find the user in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user information
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.photo = req.body.photo || user.photo;
    user.address = req.body.address || user.address;

    await user.save();

    res.status(200).json({ message: 'User information updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const { userId } = req.user;

    // Find the user in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateUser, getUserInfo };
