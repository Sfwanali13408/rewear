const mongoose = require('mongoose');

const customerQuerySchema = new mongoose.Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'open' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  const CustomerQueries = mongoose.model('CustomerQueries',customerQuerySchema);

  module.exports = CustomerQueries;