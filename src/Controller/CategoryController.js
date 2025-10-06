const CategoryService = require('../Service/CategoryService');

const createCategory = async (req, res) => {
  try {
    const { name, createdBy } = req.body;
    const category = await CategoryService.createCategory({ name, createdBy });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryService.getCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, createdBy } = req.body;
    const category = await CategoryService.updateCategory(req.params.id, { name, createdBy });
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await CategoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createCategory, getCategoryById, getAllCategories, updateCategory, deleteCategory };