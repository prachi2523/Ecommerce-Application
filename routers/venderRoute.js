const vender=require('../controller/venderController')
const express=require('express')
const router=express.Router()
const auth=require('../middlewares/auth')

router.post('/register',auth.isVender,vender.registerVender)
router.post('/login',auth.isVender,vender.loginVender)
router.post('/emailforresetpassword',vender.emailForResetPassword)
router.post('/resetpassword/:id/:token',vender.resetPassword)

module.exports=router