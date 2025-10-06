// src/routes/categoryRoute.js
const express = require('express');
const router = express.Router();
const CategoryController = require('../Controller/CategoryController');

// Tạo mới category
router.post('/', CategoryController.createCategory);

// Lấy danh sách category
router.get('/', CategoryController.getAllCategories);

// Lấy thông tin category theo ID
router.get('/:id', CategoryController.getCategoryById);

// Cập nhật category theo ID
router.put('/:id', CategoryController.updateCategory);

// Xóa category theo ID
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
