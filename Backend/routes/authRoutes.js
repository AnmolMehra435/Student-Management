const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/register')
    .post(authController.registerController)

router.route('/login')
    .post(authController.loginController)

module.exports = router;