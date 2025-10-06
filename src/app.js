const express = require('express');
const swaggerUi = require('swagger-ui-express');
const userRoute = require('./routes/userRoute');
const roleRoute = require('./routes/roleRoute');
const categoryRoute = require('./routes/categoryRoute');

const app = express();

app.use(express.json());

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
app.use('/api/v1', userRoute);
app.use('/api/v1', roleRoute);
app.use('/api/v1', categoryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});