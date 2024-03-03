const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/register', authController.register);
router.post('/login', passport.authenticate('local', { session: false }), authController.login);
router.post('/verifyEmail', authController.verifyEmail);
router.post('/verifyToken', authController.verifyToken);
router.post('/resetPassword', authController.resetPassword);
router.post('/changePassword', authController.changePassword);
router.post('/changeEmail', authController.changeEmail);
router.post('/deleteUser', authController.deleteUser);

module.exports = router;