const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: String
});
module.exports = mongoose.model('Order', orderSchema);