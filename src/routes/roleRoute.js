/**
 * roleRoute.js
 * 
 * Route layer - Định nghĩa HTTP endpoints cho Role
 * Chịu trách nhiệm: Route mapping, middleware, authentication
 * Gọi Controller layer để xử lý business logic
 * 
 * Luồng: HTTP Request → Route → Controller → Service → Repository → Database
 */

const express = require('express');
const router = express.Router();
const RoleController = require('../Controller/RoleController');

/**
 * Middleware kiểm tra quyền truy cập
 * Chỉ Admin mới có thể thực hiện các thao tác với Role
 */
const checkAuth = (req, res, next) => {
  const userRole = req.user?.role?.name || 'User';
  if (userRole !== 'Admin') return res.status(403).json({ error: 'Admin access required' });
  next();
};

// Route definitions
router.post('/', RoleController.createRole);        // POST /api/v1/roles - Tạo role mới (Admin only)
router.get('/:id', RoleController.getRoleById);                 // GET /api/v1/roles/:id - Lấy role theo ID
router.get('/', RoleController.getAllRoles);                  // GET /api/v1/roles - Lấy danh sách roles
router.put('/:id', RoleController.updateRole);     // PUT /api/v1/roles/:id - Cập nhật role (Admin only)
router.delete('/:id', RoleController.deleteRole);   // DELETE /api/v1/roles/:id - Xóa role (Admin only)

module.exports = router;