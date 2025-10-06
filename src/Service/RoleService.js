const RoleRepository = require('../Repository/RoleRepository');

class RoleService {
  async createRole(roleData) {
    return await RoleRepository.create(roleData);
  }

  async getRoleById(id) {
    const role = await RoleRepository.findById(id);
    if (!role) throw new Error('Role not found');
    return role;
  }

  async getAllRoles() {
    return await RoleRepository.findAll();
  }

  async updateRole(id, roleData) {
    const role = await RoleRepository.update(id, roleData);
    if (!role) throw new Error('Role not found');
    return role;
  }

  async deleteRole(id) {
    const role = await RoleRepository.delete(id);
    if (!role) throw new Error('Role not found');
    return role;
  }
}

module.exports = new RoleService();