const RoleService = require('../services/RoleService');

const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await RoleService.createRole({ name });
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const role = await RoleService.getRoleById(req.params.id);
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role = await RoleService.updateRole(req.params.id, { name });
    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    await RoleService.deleteRole(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createRole, getRoleById, getAllRoles, updateRole, deleteRole };