const User = require('../Model/User');

class UserRepository {
  async create(userData) {
    return await User.create({ data: userData });
  }

  async findById(id) {
    return await User.findUnique({ where: { id }, include: { role: true } });
  }

  async findAll() {
    return await User.findMany({ include: { role: true } });
  }

  async update(id, userData) {
    return await User.update({ where: { id }, data: userData });
  }

  async delete(id) {
    return await User.delete({ where: { id } });
  }
}

module.exports = new UserRepository();