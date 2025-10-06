const express = require('express');
const router = express.Router();
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require('../Controller/UserController');

const checkAuth = (req, res, next) => {
  const userRole = req.user?.role?.name || 'User';
  if (userRole !== 'Admin' && req.method !== 'GET') return res.status(403).json({ error: 'Admin access required' });
  next();
};

router.post('/', checkAuth, createUser);
router.get('/:id', getUserById);
router.get('/', getAllUsers);
router.put('/:id', checkAuth, updateUser);
router.delete('/:id', checkAuth, deleteUser);

module.exports = router;