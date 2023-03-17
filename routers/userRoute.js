const express=require('express')
const router=express.Router();
const user=require('../controller/userController')
const auth=require('../middlewares/auth')
const {upload}=require('../middlewares/imageStorage')

router.post('/register',upload.single("profilePic"),user.registerUser)
router.post('/login',auth.isUser,user.loginUser)
router.post('/emailforresetpassword',auth.auth,user.emailForResetPassword)
router.post('/resetpassword/:id/:token',user.resetPassword)

module.exports=router
