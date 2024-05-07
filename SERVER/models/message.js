
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: String,
  room: String,
  messageContent: String,
  timestamp: Date
});

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;
