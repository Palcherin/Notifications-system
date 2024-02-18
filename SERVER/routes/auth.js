const express = require ('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const users = []
router.post('/register',(req,res)=>{
  
    const {username,password,role} = req.body
    // check if user exists
    const existingUser =  users.find(user=>user.username === username)
    if(existingUser){
      return res.status(400).json({error:"username already exists"}) 
    }
    // else create a new user
    const newUser = {
      id:users.length+1,
      username,
      password,
      role
    }
    users.push(newUser)
    // Generate JWT token with user information
    const token = jwt.sign({sub:newUser.id,username:newUser.username,role:newUser.role})
    res.json({token})
  })
  



router.post('/login',(req,res)=>{
    const {username,password} = req.body;
    const user = users.find(user=> user.username == username && user.password == password)
    if(user){
      const token = jwt.sign({sub:newUser.id,username:newUser.username,role:newUser.role})
      res.json({token})
  
    }
    else {
      res.status(401).json({error:"Invalid credentials"})
    }
  })

module.exports = router