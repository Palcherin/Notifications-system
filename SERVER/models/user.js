const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    password:String,
    role:String 
})
const user = mongoose.model('user',userSchema)
module.exports=user;