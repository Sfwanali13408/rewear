const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    payment_method: { type: String, required: true },
    payment_status: { type: String, default: 'pending' },
    amount: { type: Number, required: true },
    transaction_id: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  const Payment = mongoose.model('Payments', paymentSchema);

module.exports = Payment;