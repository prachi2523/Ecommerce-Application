const userSchema=require('../model/userSchema')

const isUser= async (req, res, next) => {
    let role=req.body.role
    if (role) {
      if (role=="user") {
        next();
      } else {
        res.status(400).json({
          message: "Unauthorised user",
        })
      }
    } else {
      res.status(400).json({
         message: "Role is not present"
         })
    }
}

const isVender=async(req,res,next)=>{
  let role=req.body.role
  if(role){
    if(role==="vender"){
      next();
    }else{
      res.status(400).json({
        message:"unauthorized vender"
      })
    }
  }else{
    res.status(400).json({
      message:"Role is not present"
    })
  }
}

module.exports={
  isUser,
  isVender
}