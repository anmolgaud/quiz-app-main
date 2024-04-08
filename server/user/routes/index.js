const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/user/profile', controller.getProfile);
router.post('/user/update-profile', controller.updateProfile);
router.post('/user/verify-email', controller.verifyEmail);
router.post('/user/login', controller.login);
router.post('/user/logout', controller.logout);
router.post('/user/signup', controller.signup);

module.exports = router;