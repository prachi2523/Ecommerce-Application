const userSchema = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail=require('../services/emailservice')

const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    try {
        const { userEmail } = req.body
        const isEmailExist = await userSchema.findOne({ userEmail })
        if (isEmailExist) {
            res.status(409).json({
                success: false,
                message: "User with this email is already exist"
            });
        } else {
            try {
                const userData = new userSchema(req.body)
                const filepath = `/uploads/${req.file.filename}`
                userData.profilePic = filepath
                userData.password = await bcrypt.hash(req.body.password, salt);
                await userData.save();
                res.status(201).json({
                    success: true,
                    message: "User created succeessfully",
                });
            } catch (err) {
                res.status(400).json({
                    succcess: false,
                    message: "err " + err.message
                });
            }
        }
    } catch (err) {
        console.log(err)
    }
}
const loginUser = async (req, res) => {
    try {
        const { userEmail, password } = req.body
        const findUser = await userSchema.findOne({ userEmail })
        if (findUser) {
            const isMatch = await bcrypt.compare(password, findUser.password);
            if (findUser.userEmail == userEmail && isMatch) {
                const token = jwt.sign({ userID: isMatch._id }, process.env.SECRETKEY, { expiresIn: "8d" });
                res.status(200).json({
                    success: true,
                    message: "login Successful",
                    token: token
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Password does not Match",
                })
            }
        } else {
            res.status(400).json({
                success: false,
                message: "you are not a register user",
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const emailForResetPassword=async(req,res)=>{
 try{
    const isEmailExist=await userSchema.findOne({userEmail:req.body.userEmail})
    if(isEmailExist){
        const token=jwt.sign({userID:isEmailExist._id},process.env.SECRETKEY)
        await sendMail.sendMail(isEmailExist.userEmail,token,isEmailExist._id)
        res.status(200).json({
            success:true,
            message:"email sent successfully",
            data:token
        })
    }else{
        res.status(404).json({
            success:false,
            message:"email not found"
        })
    }
 }catch(error){
    res.status(400).json({
        success:false,
        message:"error occured "+error.message
    })
 }
}

const resetPassword=async(req,res)=>{
    const{id,token}=req.params
    const newpassword = req.body.newpassword
    const confirmPass = req.body.confirmPass
    try{
        const isUserExit=await userSchema.findById(id)
        if(isUserExit){
            jwt.verify(token, process.env.SECRETKEY);
            if (newpassword == confirmPass) {
                const salt = await bcrypt.genSalt(10)
                var password = await bcrypt.hash(confirmPass,salt)
                await userSchema.findByIdAndUpdate(isUserExit._id,
                    { $set: { password: password } })
                res.status(200).json({
                    success: true,
                    message: "Password reset successfully"
                })
            } else {
                res.status(401).json({
                    successs: false,
                    message: "password doesn't match"
                })
            }
        } else {
            res.status(403).json({
                status: false,
                message: "user does not exist"
            })
        }
    }catch(error){
        res.status(400).json({
            success:false,
            message:"error occured "+error.message
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    emailForResetPassword,
    resetPassword
}