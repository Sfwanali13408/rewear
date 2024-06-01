const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    tailor_product_id: { type: Schema.Types.ObjectId, ref: 'TailorProduct', required: true },
    buyer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bid_amount: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
  });

  const Bid = mongoose.model('Bids', bidSchema);

  module.exports = Bid;