const express = require('express');
const router = express.Router();
const task = require('../Models/task');
const createTask = require('../Controllers/createTask');
const jwtAuth = require('../Jwt/jwtAuth');

router.post('/', jwtAuth, createTask);

module.exports = router;