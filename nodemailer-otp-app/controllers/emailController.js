const { sendOTPEmail } = require('../utils/emailService');

exports.sendOTP = async (req, res) => {
  const { to } = req.body;

  if (!to) return res.status(400).json({ message: 'Email is required' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await sendOTPEmail(to, otp);
    res.status(200).json({ message: 'OTP sent successfully', otp });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};
