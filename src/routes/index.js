const express = require('express')
const router = express.Router();

const userRoute =require('./userRoute.js');
const roleRoute = require('./roleRoute.js')
router.use('/api/v1/users',userRoute);
router.use('/api/v1/roles', roleRoute)

module.exports = router;
