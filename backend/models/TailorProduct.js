const mongoose = require('mongoose');

const tailorProductSchema = new mongoose.Schema({
    tailor_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: String,
    starting_price: { type: Number, required: true },
    category: String,
    images: [String],
    bid_end_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  const TailorProduct = mongoose.model('TailorProducts', tailorProductSchema);

  module.exports = TailorProduct;