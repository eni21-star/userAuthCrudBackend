const express = require('express');
const router = express.Router();
const model = require('../Models/model');
const loginController = require('../Controllers/LoginController');

router.post('/', loginController);

module.exports = router;