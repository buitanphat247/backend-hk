/**
 * userRoute.js
 * 
 * Route layer - Định nghĩa HTTP endpoints cho User
 * Chịu trách nhiệm: Route mapping, middleware, authentication
 * Gọi Controller layer để xử lý business logic
 * 
 * Luồng: HTTP Request → Route → Controller → Service → Repository → Database
 */

const express = require('express');
const router = express.Router();
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require('../Controller/UserController');


// Route definitions
router.post('/', createUser);        // POST /api/v1/users - Tạo user mới (Admin only)
router.get('/:id', getUserById);                // GET /api/v1/users/:id - Lấy user theo ID
router.get('/', getAllUsers);                   // GET /api/v1/users - Lấy danh sách users
router.put('/:id', updateUser);      // PUT /api/v1/users/:id - Cập nhật user (Admin only)
router.delete('/:id', deleteUser);   // DELETE /api/v1/users/:id - Xóa user (Admin only)

module.exports = router;