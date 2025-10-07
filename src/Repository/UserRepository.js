/**
 * UserRepository.js
 * 
 * Repository layer - Data Access Layer cho User
 * Chịu trách nhiệm: Database operations, data persistence
 * Sử dụng Prisma ORM để tương tác với MongoDB
 * 
 * Luồng: Service → Repository → Database (MongoDB)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * UserRepository class
 * Chứa tất cả database operations liên quan đến User
 * Sử dụng PrismaClient để tương tác với MongoDB
 */
class UserRepository {
  /**
   * Tạo mới user trong database
   * @param {Object} userData - { name, email, roleId }
   * @returns {Object} Created user object
   */
  async create(userData) {
    return await prisma.user.create({ data: userData });
  }

  /**
   * Tìm user theo ID với role information
   * @param {String} id - User ObjectId
   * @returns {Object} User object with role
   */
  async findById(id) {
    return await prisma.user.findUnique({ where: { id }, include: { role: true } });
  }

  /**
   * Lấy tất cả users với role information
   * @returns {Array} Array of user objects with roles
   */
  async findAll() {
    return await prisma.user.findMany({ include: { role: true } });
  }

  /**
   * Cập nhật user trong database
   * @param {String} id - User ObjectId
   * @param {Object} userData - { name, email, roleId }
   * @returns {Object} Updated user object
   */
  async update(id, userData) {
    return await prisma.user.update({ where: { id }, data: userData });
  }

  /**
   * Xóa user khỏi database
   * @param {String} id - User ObjectId
   * @returns {Object} Deleted user object
   */
  async delete(id) {
    return await prisma.user.delete({ where: { id } });
  }
}

module.exports = new UserRepository();