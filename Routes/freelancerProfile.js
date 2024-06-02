const freelancerController = require('../Controllers/freelancerProfile');
const express = require('express');
const router = express.Router();
const jwtAuth = require('../Jwt/jwtAuth');

router.post('/', jwtAuth, freelancerController);

module.exports = router;