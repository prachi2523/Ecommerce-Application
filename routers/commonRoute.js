const  userRoute=require('./userRoute')
const venderRoute=require('./venderRoute')
const express=require('express')
const router=express.Router()

router.use('/user',userRoute)
router.use('/vender',venderRoute)

module.exports=router