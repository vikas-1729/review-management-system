const express = require('express');
const router = express.Router();
const homeController = require('../../../controller/api/v1/home');
// for creating view
router.post('/review_create', homeController.review_create);

//for approval of review
router.get('/review_approval', homeController.review_approval);
router.use('/read/review', require('./read'));

router.all('/',function(req,res){
	return res.status(404).json({
		success:false,
		message:"page not found"
	})
});
module.exports = router;
