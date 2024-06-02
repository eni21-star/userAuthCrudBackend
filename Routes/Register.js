const express = require('express');
const router = express.Router();
const model = require('../Models/model');
const registerController = require('../Controllers/RegisterController');




router.post('/', registerController);

module.exports = router;