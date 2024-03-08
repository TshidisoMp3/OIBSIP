const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('./authController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/verifyEmail', authController.verifyEmail);
router.post('/verifyToken', authController.verifyToken);
router.post('/resetPassword', authController.resetPassword);
router.post('/changePassword', authController.changePassword);
router.post('/changeEmail', authController.changeEmail);
router.post('/deleteUser', authController.deleteUser);

module.exports = router;