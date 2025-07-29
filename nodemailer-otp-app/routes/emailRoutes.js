const express = require('express');
const router = express.Router();
const { sendOTP } = require('../controllers/emailController');

router.post('/send-otp', sendOTP);

module.exports = router;



