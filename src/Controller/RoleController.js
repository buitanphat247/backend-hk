/**
 * RoleController.js
 * 
 * Controller layer - Xử lý HTTP requests/responses cho Role
 * Chịu trách nhiệm: HTTP handling, validation, response formatting
 * Gọi Service layer để thực hiện business logic
 * 
 * Luồng: HTTP Request → Controller → Service → Repository → Database
 */

const RoleService = require('../Service/RoleService');

/**
 * Tạo mới role
 * POST /api/v1/roles
 * Body: { name }
 * Auth: Admin required
 */
const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await RoleService.createRole({ name });
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Lấy thông tin role theo ID
 * GET /api/v1/roles/:id
 * Params: id (ObjectId)
 */
const getRoleById = async (req, res) => {
  try {
    const role = await RoleService.getRoleById(req.params.id);
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Lấy danh sách tất cả roles
 * GET /api/v1/roles
 * Response: Array of roles
 */
const getAllRoles = async (req, res) => {
  try {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Cập nhật thông tin role
 * PUT /api/v1/roles/:id
 * Params: id (ObjectId)
 * Body: { name }
 * Auth: Admin required
 */
const updateRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await RoleService.updateRole(req.params.id, { name });
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/**
 * Xóa role
 * DELETE /api/v1/roles/:id
 * Params: id (ObjectId)
 * Auth: Admin required
 * Response: 204 No Content
 */
const deleteRole = async (req, res) => {
  try {
    await RoleService.deleteRole(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createRole, getRoleById, getAllRoles, updateRole, deleteRole };