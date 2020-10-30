const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/index');
const cors = require('cors');
app.use(cors());

app.use(express.urlencoded());
app.use(require('./router/index'));

app.listen(port, function (err) {
  if (err) {
    console.log(`error occur ${err}`);
    return;
  }
  console.log('connected to port', port);
});
