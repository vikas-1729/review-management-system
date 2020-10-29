const express = require('express');
const router = express.Router();
const readController = require('../../../controller/api/v1/read');

router.get('/:id', readController.id); //read by review id
router.get('/all', readController.all); //read all review
router.get('/status/:value', readController.status); // read review by status i.e approved or rejected
router.get('/product/:id', readController.product); //read by product id
router.get('/user/:id', readController.user); //read by user id
module.exports = router;

//review id :5f997ede3e3c061900078700
//customer id:5f9921eb4e3aea0328d62645
// product id:5f9921eb4e3aea0328d62646