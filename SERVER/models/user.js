const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String, // Update to reflect the hashed password
    role: String 
});
const User = mongoose.model('User', userSchema);
module.exports = User;
