const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'customer',
    },
    star:{
      type:Number,
      min:1,
      max:5
    },
    comment:{
      type:Number
    },
    
    status: {
      type: String,
      enum: ['rejected', 'approved', 'pending'],
    },
  },
  {
    timestamps: true,
  }
);

const review = mongoose.model('review', ReviewSchema);
module.exports = review;
