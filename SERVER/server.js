const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const twilio=require('./routes/Twilio');
const socket=require('./routes/Socket')
const server = http.createServer(app);
const io = socketIO(server);
const Message = require('./models/Message');

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


// socket
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for incoming chat messages
  socket.on('chat message', (data) => {
    console.log('Received message:', data);

    // Save the message to MongoDB
    const message = new Message({ user: data.user, text: data.message });
    message.save((err) => {
      if (err) {
        console.error('Error saving message to database:', err);
      } else {
        console.log('Message saved to the database');
      }
    });

    // Broadcast the message to all connected clients
    io.emit('chat message', data);
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


app.get('/', (req, res) => {
  const status = {
    "status": "running"
  };
  
  res.send(status);
});

app.use('/api', auth);
app.use('/api',twilio);


server.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
