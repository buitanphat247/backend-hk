const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Database connection check
const checkDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
};

// Swagger setup
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
  },
  paths: {
    '/api/v1/users': {
      post: { summary: 'Tạo mới user', responses: { '201': { description: 'User created' }, '400': { description: 'Invalid input' } } },
      get: { summary: 'Lấy danh sách user', responses: { '200': { description: 'Successful response' } } },
    },
    '/api/v1/users/{id}': {
      get: { summary: 'Lấy thông tin user theo ID', parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }], responses: { '200': { description: 'Successful response' }, '404': { description: 'User not found' } } },
      put: { summary: 'Cập nhật user theo ID', parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }], responses: { '200': { description: 'User updated' }, '404': { description: 'User not found' } } },
      delete: { summary: 'Xóa user theo ID', parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }], responses: { '204': { description: 'User deleted' }, '404': { description: 'User not found' } } },
    },
    // Thêm các path cho /roles và /categories nếu cần
  },
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;

// Start server with database connection check
const startServer = async () => {
  try {
    // Check database connection before starting server
    const isConnected = await checkDatabaseConnection();

    if (isConnected) {
      app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
        console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
      });
    } else {
      console.error('❌ Cannot start server - Database connection failed');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Server startup failed:', error.message);
    process.exit(1);
  }
};

startServer();