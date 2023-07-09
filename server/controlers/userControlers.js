const data = require('../model/userModel')
const bcrypt = require("bcrypt")

exports.signup =async(req, res)=>{
    const {name, email, password, confirmPassword} = req.body
    try{
      const findUser = await data.findOne({ email});
      if(findUser){
          res.status(400).json("user already exist") 
      }
      if(password !== confirmPassword){
        return res.status(400).send("passwords dont match")
      }
      
      const hashedPassword =  bcrypt.hash(req.body.password, 10)
      req.body.password = hashedPassword;
      await data.create({...req.body})
      res.status(200).json('created successfully')
      }
    catch (error){
       return  res.status(400).json(error.message)
      }
}

exports.getAll = async(req,res) => {
  try{
    const user = await data.find()
    res.status(200).json(user)
  }
  catch(error){
    res.status(400).json('error')
  }   
}
