const reviewModel = require('../../../model/review');
const customerModel = require('../../../model/customer');
const productModel = require('../../../model/product');

module.exports.review_create = async function (req, res) {
  // first find out that customer and product exist

  try {
    let customer = await customerModel.findOne({ _id: req.body.customer_id });
    console.log('customer', customer);
    if (!customer) {
      return res.status(406).json({
        success: false,
        message: 'customer not exist',
      });
    }
    let product = await productModel.findOne({ _id: req.body.product_id });
    if (!product) {
      return res.status(406).json({
        success: false,
        message: 'product not exist',
      });
    }
    let review = await reviewModel.create(req.body);
    return res.status(200).json({
      success: true,
      message: 'review_created_successfully',
      data: review,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

module.exports.review_approval = async function (req, res) {
  // review_approval it is a get request with two parameter _id and status _id is which review and status to know it is
  //approved or not
  try {
    let review = await reviewModel.findById(req.query._id); //getting the review
    if (!review) {
      // if review not exist
      return res.status(406).json({
        success: false,
        message: 'review id not exits',
      });
    }
    if (req.query.approved == 'true') {
      // if review approved
      console.log('okk', review.status);
      review.status = 'approved';
    } else if (req.query.approved == 'false') {
      // if review not approved
      review.status = 'rejected';
    }
    await review.save();
    return res.status(200).json({
      success: true,
      message: 'reviwe sucessfull',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
