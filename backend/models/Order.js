const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    buyer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    total_price: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;