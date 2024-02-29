const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const twilio=require('./routes/Twilio');
const socket=require('./routes/Socket')

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB

const uri = process.env.MONGO_URI


async function connect() {
  try {
    await mongoose.connect(uri, {useNewUrlParser: true,
      useUnifiedTopology: true, });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process in case of an error
  }
}

connect();

app.get('/', (req, res) => {
  const status = {
    "status": "running"
  };
  
  res.send(status);
});

app.use('/api', auth);
app.use('/api',twilio);
app.use('/api', socket);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
