const CategoryRepository = require('../Repository/CategoryRepository');

   class CategoryService {
     async createCategory(categoryData) {
       return await CategoryRepository.create(categoryData);
     }

     async getCategoryById(id) {
       const category = await CategoryRepository.findById(id);
       if (!category) throw new Error('Category not found');
       return category;
     }

     async getAllCategories() {
       return await CategoryRepository.findAll();
     }

     async updateCategory(id, categoryData) {
       const category = await CategoryRepository.update(id, categoryData);
       if (!category) throw new Error('Category not found');
       return category;
     }

     async deleteCategory(id) {
       const category = await CategoryRepository.delete(id);
       if (!category) throw new Error('Category not found');
       return category;
     }
   }

   module.exports = new CategoryService();