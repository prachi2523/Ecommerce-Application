const  userRoute=require('./userRoute')
const venderRoute=require('./venderRoute')
const express=require('express')
const router=express.Router()
const productRoute=require('./productRoute')
const reviewRoute=require('./reviewRoute')

router.use('/user',userRoute)
router.use('/vender',venderRoute)
router.use('/product',productRoute)
router.use('/review',reviewRoute)

module.exports=router