const express = require('express');
const router = express.Router();
const authctrl = require('../controllers/auth.controller');

router.post('/login', authctrl.login);
router.refresh('/refresh', authctrl.refresh);
router.post('/logout', authctrl.logout);

module.exports = router;