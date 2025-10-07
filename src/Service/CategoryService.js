/**
 * CategoryService.js
 * 
 * Service layer - Chứa business logic cho Category
 * Chịu trách nhiệm: Business rules, validation, data transformation
 * Gọi Repository layer để thực hiện data operations
 * 
 * Luồng: Controller → Service → Repository → Database
 */

const CategoryRepository = require('../Repository/CategoryRepository');

/**
 * CategoryService class
 * Chứa tất cả business logic liên quan đến Category
 */
class CategoryService {
  /**
   * Tạo mới category
   * @param {Object} categoryData - { name, createdBy? }
   * @returns {Object} Created category object
   */
  async createCategory(categoryData) {
    return await CategoryRepository.create(categoryData);
  }

  /**
   * Lấy category theo ID
   * @param {String} id - Category ObjectId
   * @returns {Object} Category object
   * @throws {Error} Category not found
   */
  async getCategoryById(id) {
    const category = await CategoryRepository.findById(id);
    if (!category) throw new Error('Category not found');
    return category;
  }

  /**
   * Lấy tất cả categories
   * @returns {Array} Array of category objects
   */
  async getAllCategories() {
    return await CategoryRepository.findAll();
  }

  /**
   * Cập nhật thông tin category
   * @param {String} id - Category ObjectId
   * @param {Object} categoryData - { name, createdBy? }
   * @returns {Object} Updated category object
   * @throws {Error} Category not found
   */
  async updateCategory(id, categoryData) {
    const category = await CategoryRepository.update(id, categoryData);
    if (!category) throw new Error('Category not found');
    return category;
  }

  /**
   * Xóa category
   * @param {String} id - Category ObjectId
   * @returns {Object} Deleted category object
   * @throws {Error} Category not found
   */
  async deleteCategory(id) {
    const category = await CategoryRepository.delete(id);
    if (!category) throw new Error('Category not found');
    return category;
  }
}

module.exports = new CategoryService();
