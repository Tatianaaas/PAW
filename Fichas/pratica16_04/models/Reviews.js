var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  name: String,
  mail: String,
  book: String,
  imag: String,
  description: String,
  status: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ReviewBook', ReviewSchema);
