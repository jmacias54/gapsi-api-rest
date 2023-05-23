const mongoose = require("mongoose");

const providerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true

  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('provider', providerSchema);