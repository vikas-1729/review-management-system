const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const customer = mongoose.model('customer', CustomerSchema);
module.exports = customer;
