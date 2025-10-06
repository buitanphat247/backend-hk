const UserRepository = require('../Repository/UserRepository');

class UserService {
  async createUser(userData) {
    return await UserRepository.create(userData);
  }

  async getUserById(id) {
    const user = await UserRepository.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  async getAllUsers() {
    return await UserRepository.findAll();
  }

  async updateUser(id, userData) {
    const user = await UserRepository.update(id, userData);
    if (!user) throw new Error('User not found');
    return user;
  }

  async deleteUser(id) {
    const user = await UserRepository.delete(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}

module.exports = new UserService();