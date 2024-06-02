const displayTaskController = require('../Controllers/readTask');
const express = require('express');
const router = express.Router();

router.get('/', displayTaskController);

module.exports = router;