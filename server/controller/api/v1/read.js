const reviewModel = require('../../../model/review');

module.exports.all = async function (req, res) {
  // read all review
  try {
    let review = await reviewModel
      .find({})
      .populate('product_id') // populate the product
      .populate('customer_id'); // populate the customer
    return res.status(200).json({
      success: true,
      message: 'fetch data sucessfully',
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports.id = async function (req, res) {
  // read review by review id
  try {
    let review = await reviewModel
      .findOne({ _id: req.params.id })
      .populate('product_id')
      .populate('customer_id');
    if (!review) {
      // if no review of this id
      return res.status(200).json({
        success: true,
        message: 'no review of this id',
        data: review,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'fetch data sucessfully',
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports.status = async function (req, res) {
  // read review by status
  try {
    if (
      req.params.value == 'approved' ||
      req.params.value == 'rejected' ||
      req.params.value == 'pending'
    ) {
      let review = await reviewModel
        .find({ status: req.params.value })
        .populate('product_id')
        .populate('customer_id');
      return res.status(200).json({
        success: true,
        message: 'fetch data sucessfully',
        data: review,
      });
    } else {
      return res.status(422).json({
        success: false,
        message: 'status with this value not exits',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports.product = async function (req, res) {
  try {
    let review = await reviewModel
      .find({ product_id: req.params.id })
      .populate('product_id')
      .populate('customer_id');
    if (review.length == 0) {
      return res.status(200).json({
        success: true,
        message: 'no review for this product',
        data: review,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'fetch data sucessfully',
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports.user = async function (req, res) {
  // review by user id
  try {
    let review = await reviewModel
      .find({ customer_id: req.params.id })
      .populate('product_id')
      .populate('customer_id');
    if (review.length == 0) {
      return res.status(200).json({
        success: true,
        message: 'no review by this user',
        data: review,
      });
    }
    return res.status(200).json({
      success: true,
      message: 'fetch data sucessfully',
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
