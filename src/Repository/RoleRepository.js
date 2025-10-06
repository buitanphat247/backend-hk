const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.MONGO_URI
    }
  }
});

class RoleRepository {
  async create(roleData) {
    return await prisma.role.create({ data: roleData });
  }

  async findById(id) {
    return await prisma.role.findUnique({ where: { id } });
  }

  async findAll() {
    return await prisma.role.findMany();
  }

  async update(id, roleData) {
    return await prisma.role.update({ where: { id }, data: roleData });
  }

  async delete(id) {
    return await prisma.role.delete({ where: { id } });
  }
}

module.exports = new RoleRepository();