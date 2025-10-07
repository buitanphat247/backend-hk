/**
 * index.js
 * 
 * Main routes file - Tập trung tất cả routes
 * Chịu trách nhiệm: Route organization, path prefixing
 * Import và sử dụng tất cả route modules
 * 
 * Luồng: HTTP Request → index.js → specific route → Controller → Service → Repository → Database
 */

const express = require('express');
const router = express.Router();

// Import route modules
const userRoute = require('./userRoute');
const roleRoute = require('./roleRoute');
const categoryRoute = require('./categoryRoute');

// Route mounting với path prefix
router.use('/api/v1/users', userRoute);        // Mount user routes tại /api/v1/users
router.use('/api/v1/roles', roleRoute);        // Mount role routes tại /api/v1/roles
router.use('/api/v1/categories', categoryRoute); // Mount category routes tại /api/v1/categories

module.exports = router;
