const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  orderId: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  quantity: Number
});
module.exports = mongoose.model('Item', itemSchema);