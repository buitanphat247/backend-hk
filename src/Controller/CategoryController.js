/**
 * CategoryController.js
 * 
 * Controller layer - Xử lý HTTP requests/responses cho Category
 * Chịu trách nhiệm: HTTP handling, validation, response formatting
 * Gọi Service layer để thực hiện business logic
 * 
 * Luồng: HTTP Request → Controller → Service → Repository → Database
 */

const CategoryService = require('../Service/CategoryService');

/**
 * Tạo mới category
 * POST /api/v1/categories
 * Body: { name, createdBy? }
 */
const createCategory = async (req, res) => {
  try {
    const { name, createdBy } = req.body;
    const category = await CategoryService.createCategory({ name, createdBy });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Lấy thông tin category theo ID
 * GET /api/v1/categories/:id
 * Params: id (ObjectId)
 */
const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Lấy danh sách tất cả categories
 * GET /api/v1/categories
 * Response: Array of categories
 */
const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Cập nhật thông tin category
 * PUT /api/v1/categories/:id
 * Params: id (ObjectId)
 * Body: { name, createdBy? }
 */
const updateCategory = async (req, res) => {
  try {
    const { name, createdBy } = req.body;
    const category = await CategoryService.updateCategory(req.params.id, { name, createdBy });
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Xóa category
 * DELETE /api/v1/categories/:id
 * Params: id (ObjectId)
 * Response: 204 No Content
 */
const deleteCategory = async (req, res) => {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategory };