/**
 * categoryRoute.js
 * 
 * Route layer - Định nghĩa HTTP endpoints cho Category
 * Chịu trách nhiệm: Route mapping, middleware, authentication
 * Gọi Controller layer để xử lý business logic
 * 
 * Luồng: HTTP Request → Route → Controller → Service → Repository → Database
 */

const express = require('express');
const router = express.Router();
const CategoryController = require('../Controller/CategoryController');

// Route definitions
router.post('/', CategoryController.createCategory);        // POST /api/v1/categories - Tạo category mới

router.get('/', CategoryController.getAllCategories);       // GET /api/v1/categories - Lấy danh sách categories
router.get('/:id', CategoryController.getCategoryById);       // GET /api/v1/categories/:id - Lấy category theo ID
router.put('/:id', CategoryController.updateCategory);      // PUT /api/v1/categories/:id - Cập nhật category
router.delete('/:id', CategoryController.deleteCategory);    // DELETE /api/v1/categories/:id - Xóa category

module.exports = router;
