const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

const db = require('./config/index');
const cors = require('cors');
app.use(cors());

 const router=require('./router/index');
app.use(express.urlencoded());
app.use(router);
//app.use('/api/v1', router);

// this is default in case of unmatched routes
app.use(function(req, res) {
// Invalid request
return res.status(404).json({
	success:false,
	message:'there is not any  url please read backend  section api url in github'
});

});



app.listen(port, function (err) {
  if (err) {
    console.log(`error occur ${err}`);
    return;
  }
  console.log('connected to port', port);
});
