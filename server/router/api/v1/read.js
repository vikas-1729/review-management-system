const express = require('express');
const router = express.Router();
const readController = require('../../../controller/api/v1/read');

router.get('/id/:id', readController.id); //read by review id
router.get('/all', readController.all); //read all review
router.post('/fetch', readController.fetch); //fetch review for api
router.get('/status/:value', readController.status); // read review by status i.e approved or rejected
router.get('/product/:id', readController.product); //read by product id
router.get('/user/:id', readController.user); //read by user id

module.exports = router;

