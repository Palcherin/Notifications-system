const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const my_secret_key = process.env.JWTKEY;

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({
      username,
      hashedPassword, // Store the hashed password
      role,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token with user information
    const token = jwt.sign({ sub: newUser.id, username: newUser.username, role: newUser.role }, my_secret_key);
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
    const user = await User.findOne({ username });

    if (user) {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
      if (isPasswordValid) {
        // Generate JWT token with user information
        const token = jwt.sign({ sub: user.id, username: user.username, role: user.role }, my_secret_key);
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;
