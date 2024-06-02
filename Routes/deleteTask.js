const deleteTaskController = require('../Controllers/deleteTask');
const express = require('express');
const router = express.Router();
const jwtAuth = require('../Jwt/jwtAuth');

router.delete('/:id', jwtAuth, deleteTaskController );

module.exports = router;