
const { v4: uuidv4 } = require('uuid'); 
const User = require('../models/usermodel');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.createuser = async (req, res) => {
    const {  name,email,password } = req.body;
    const user =new User({
        user_id:uuidv4(),
        name,
        email,password
    });
    await user.save();
    res.status(200).json("user successfully added");
    };

exports.login=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user =await User.findOne({email});
        if(!user){
            return res.status(400).json("invalid")
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json("invalid")
        }
        const token=jwt.sign({user_id:user._id},"secret_token",{expiresIn:"3h"});
       return  res.status(200).json(token);
    }
    catch(err){
        console.log(err)
    }
}

