/**
 * CategoryRepository.js
 * 
 * Repository layer - Data Access Layer cho Category
 * Chịu trách nhiệm: Database operations, data persistence
 * Sử dụng Prisma ORM để tương tác với MongoDB
 * 
 * Luồng: Service → Repository → Database (MongoDB)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * CategoryRepository class
 * Chứa tất cả database operations liên quan đến Category
 * Sử dụng PrismaClient để tương tác với MongoDB
 */
class CategoryRepository {
  /**
   * Tạo mới category trong database
   * @param {Object} categoryData - { name, createdBy? }
   * @returns {Object} Created category object
   */
  async create(categoryData) {
    return await prisma.category.create({ data: categoryData });
  }

  /**
   * Tìm category theo ID
   * @param {String} id - Category ObjectId
   * @returns {Object} Category object
   */
  async findById(id) {
    return await prisma.category.findUnique({ where: { id } });
  }

  /**
   * Lấy tất cả categories
   * @returns {Array} Array of category objects
   */
  async findAll() {
    return await prisma.category.findMany();
  }

  /**
   * Cập nhật category trong database
   * @param {String} id - Category ObjectId
   * @param {Object} categoryData - { name, createdBy? }
   * @returns {Object} Updated category object
   */
  async update(id, categoryData) {
    return await prisma.category.update({ where: { id }, data: categoryData });
  }

  /**
   * Xóa category khỏi database
   * @param {String} id - Category ObjectId
   * @returns {Object} Deleted category object
   */
  async delete(id) {
    return await prisma.category.delete({ where: { id } });
  }
}

module.exports = new CategoryRepository();