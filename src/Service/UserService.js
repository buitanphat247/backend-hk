/**
 * UserService.js
 * 
 * Service layer - Chứa business logic cho User
 * Chịu trách nhiệm: Business rules, validation, data transformation
 * Gọi Repository layer để thực hiện data operations
 * 
 * Luồng: Controller → Service → Repository → Database
 */

const UserRepository = require('../Repository/UserRepository');

/**
 * UserService class
 * Chứa tất cả business logic liên quan đến User
 */
class UserService {
  /**
   * Tạo mới user
   * @param {Object} userData - { name, email, roleId }
   * @returns {Object} Created user object
   */
  async createUser(userData) {
    return await UserRepository.create(userData);
  }

  /**
   * Lấy user theo ID với role information
   * @param {String} id - User ObjectId
   * @returns {Object} User object with role
   * @throws {Error} User not found
   */
  async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  /**
   * Lấy tất cả users với role information
   * @returns {Array} Array of user objects with roles
   */
  async getAllUsers() {
    return await UserRepository.findAll();
  }

  /**
   * Cập nhật thông tin user
   * @param {String} id - User ObjectId
   * @param {Object} userData - { name, email, roleId }
   * @returns {Object} Updated user object
   * @throws {Error} User not found
   */
  async updateUser(id, userData) {
    const user = await UserRepository.update(id, userData);
    if (!user) throw new Error('User not found');
    return user;
  }

  /**
   * Xóa user
   * @param {String} id - User ObjectId
   * @returns {Object} Deleted user object
   * @throws {Error} User not found
   */
  async deleteUser(id) {
    const user = await UserRepository.delete(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}

module.exports = new UserService();