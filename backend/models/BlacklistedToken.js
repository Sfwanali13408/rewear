const mongoose = require('mongoose');
const moment = require('moment-timezone');

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date, default: () => moment().tz('Asia/Karachi').toDate(),
    required: true,
  },
});

const BlacklistedToken = mongoose.model('BlacklistedToken', blacklistedTokenSchema);

module.exports = BlacklistedToken;
