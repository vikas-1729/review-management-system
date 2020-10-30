const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.all('/',function(req,res){
	return res.status(404).json({
		success:false,
		message:"page not found"
	})
});

module.exports = router;
