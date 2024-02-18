const express = require('express');
const jwb = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express();
const auth = require('./routes/auth')
app.use(bodyParser.json() )

app.use('/api',auth)


app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
