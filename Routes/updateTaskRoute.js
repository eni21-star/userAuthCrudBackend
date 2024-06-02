const updateTaskcontroller = require('../Controllers/updateTask');
const express = require('express');
const router = express.Router();
const jwtAuth = require('../Jwt/jwtAuth');


router.put('/:id', jwtAuth, updateTaskcontroller);

module.exports = router;

