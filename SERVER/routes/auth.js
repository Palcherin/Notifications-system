const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user');


// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user instance
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      hashedPassword, 
      role,
    });

    // Save the user to the database
    await newUser.save();
    console.log(username,role)

    // Generate JWT token with user information
    const token = jwt.sign({ sub: newUser.id, username: newUser.username, role: newUser.role });
    res.json({ token });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username, password }); // TODO: Hash the password before querying

    if (user) {
      // Generate JWT token with user information
      const token = jwt.sign({ sub: user.id, username: user.username, role: user.role });
      
      res.json({ token });
      
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
