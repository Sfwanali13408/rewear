const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    reviewer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    reviewee_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    created_at: { type: Date, default: Date.now }
  });

  const Reviews = mongoose.model('Reviews',reviewSchema);

  module.exports = Reviews;