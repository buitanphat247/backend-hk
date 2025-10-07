/**
 * RoleService.js
 * 
 * Service layer - Chứa business logic cho Role
 * Chịu trách nhiệm: Business rules, validation, data transformation
 * Gọi Repository layer để thực hiện data operations
 * 
 * Luồng: Controller → Service → Repository → Database
 */

const RoleRepository = require('../Repository/RoleRepository');

/**
 * RoleService class
 * Chứa tất cả business logic liên quan đến Role
 */
class RoleService {
  /**
   * Tạo mới role
   * @param {Object} roleData - { name }
   * @returns {Object} Created role object
   */
  async createRole(roleData) {
    return await RoleRepository.create(roleData);
  }

  /**
   * Lấy role theo ID
   * @param {String} id - Role ObjectId
   * @returns {Object} Role object
   * @throws {Error} Role not found
   */
  async getRoleById(id) {
    const role = await RoleRepository.findById(id);
    if (!role) throw new Error('Role not found');
    return role;
  }

  /**
   * Lấy tất cả roles
   * @returns {Array} Array of role objects
   */
  async getAllRoles() {
    return await RoleRepository.findAll();
  }

  /**
   * Cập nhật thông tin role
   * @param {String} id - Role ObjectId
   * @param {Object} roleData - { name }
   * @returns {Object} Updated role object
   * @throws {Error} Role not found
   */
  async updateRole(id, roleData) {
    const role = await RoleRepository.update(id, roleData);
    if (!role) throw new Error('Role not found');
    return role;
  }

  /**
   * Xóa role
   * @param {String} id - Role ObjectId
   * @returns {Object} Deleted role object
   * @throws {Error} Role not found
   */
  async deleteRole(id) {
    const role = await RoleRepository.delete(id);
    if (!role) throw new Error('Role not found');
    return role;
  }
}

module.exports = new RoleService();