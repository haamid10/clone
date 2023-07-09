const data = require('../model/userModel')

exports.signup =async(req, res)=>{
    const {name, email, password} = req.body
    try{
      const user = await data.findOne({email: data.email});
      if(user){
        return  res.send("user already exist")
        
      }
      

      await data.create(req.body)
      res.status(200).json('created successfully')
      }
    catch (error){
        res.status(400).json('error')
      }

    
    
    


}

