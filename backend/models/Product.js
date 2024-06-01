const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    seller_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    images: [String],
    stock: { type: Number, default: 1 },
    condition: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true,
        validate: {
          validator: function(value) {
            return value % 0.1 === 0; // Ensure value is divisible by 0.1
          },
          message: 'Condition must be a float with one decimal point, within the range of 1 to 5'
        } 
      },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  const Product = mongoose.model('Products', productSchema);

module.exports = Product;