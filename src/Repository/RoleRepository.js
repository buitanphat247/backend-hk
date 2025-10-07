/**
 * RoleRepository.js
 * 
 * Repository layer - Data Access Layer cho Role
 * Chịu trách nhiệm: Database operations, data persistence
 * Sử dụng Prisma ORM để tương tác với MongoDB
 * 
 * Luồng: Service → Repository → Database (MongoDB)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * RoleRepository class
 * Chứa tất cả database operations liên quan đến Role
 * Sử dụng PrismaClient để tương tác với MongoDB
 */
class RoleRepository {
  /**
   * Tạo mới role trong database
   * @param {Object} roleData - { name }
   * @returns {Object} Created role object
   */
  async create(roleData) {
    return await prisma.role.create({ data: roleData });
  }

  /**
   * Tìm role theo ID
   * @param {String} id - Role ObjectId
   * @returns {Object} Role object
   */
  async findById(id) {
    return await prisma.role.findUnique({ where: { id } });
  }

  /**
   * Lấy tất cả roles
   * @returns {Array} Array of role objects
   */
  async findAll() {
    return await prisma.role.findMany();
  }

  /**
   * Cập nhật role trong database
   * @param {String} id - Role ObjectId
   * @param {Object} roleData - { name }
   * @returns {Object} Updated role object
   */
  async update(id, roleData) {
    return await prisma.role.update({ where: { id }, data: roleData });
  }

  /**
   * Xóa role khỏi database
   * @param {String} id - Role ObjectId
   * @returns {Object} Deleted role object
   */
  async delete(id) {
    return await prisma.role.delete({ where: { id } });
  }
}

module.exports = new RoleRepository();