const mongoose = require('mongoose');
const moment = require('moment-timezone');

const userSchema = new mongoose.Schema({
  email: { 
    type: String, required: true, unique: true },
  password: { 
    type: String, required: true },
  role: { 
    type: String, 
    enum: ['buyer', 'seller', 'tailor'], 
    default: 'buyer' 
  },
  profile: {
    name: String,
    address: String,
    phone: String
  },
  status: { 
    type: String, default: 'active' },
  created_at: { 
    type: Date, default: () => moment().tz('Asia/Karachi').toDate() 
  },
  updated_at: { 
    type: Date, default: () => moment().tz('Asia/Karachi').toDate() 
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
