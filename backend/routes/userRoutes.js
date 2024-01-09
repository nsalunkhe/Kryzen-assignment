const express = require('express');
const { authenticateUser } = require('../middleware/authMiddleware');
const { updateUser, getUserInfo } = require('../controllers/userController');

const router = express.Router();

router.put('/update', authenticateUser, updateUser);
router.get('/info', authenticateUser, getUserInfo); 

module.exports = router;
