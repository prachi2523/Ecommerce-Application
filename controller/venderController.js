const vender = require('../model/venderSchema')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const sendMail=require('../services/emailservice')

const registerVender = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    try {
        const { venderEmail } = req.body
        const isVenderExist = await vender.findOne({ venderEmail })
        console.log(isVenderExist);
        if (isVenderExist) {
            res.status(401).json({
                sucess: false,
                message: "vender with this email already exist"
            })
        } else {
            try {
                const venderData = new vender(req.body)
                // const filepath = `/uploads/${req.file.filename}`
                // venderData.profilePic = filepath
                venderData.password = await bcrypt.hash(req.body.password, salt)
                await venderData.save()
                res.status(201).json({
                    success: true,
                    message: "vender created successfully"
                })
            } catch (error) {
                res.status(401).json({
                    success: false,
                    messsage: "error occured " + error.message
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const loginVender = async (req, res) => {
    try {
        const { venderEmail, password } = req.body
        const findVender = await vender.findOne({ venderEmail })
        if (findVender) {
            const isMatch = await bcrypt.compare(password, findVender.password);
            if (findVender.venderEmail == venderEmail && isMatch) {
                const token = jwt.sign({ venderID: isMatch._id }, process.env.SECRETKEY, { expiresIn: "8d" });
                res.status(200).json({
                    success: true,
                    message: "login Successful",
                    token: token
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "error occured ",
                })
            }
        } else {
            res.status(400).json({
                success: false,
                message: "Password does not Match",
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
        const isEmailExist=await vender.findOne({venderEmail:req.body.venderEmail})
        if(isEmailExist){
            const token=jwt.sign({venderId:isEmailExist._id},process.env.SECRETKEY,)
            await sendMail.sendMail(isEmailExist.venderEmail,token,isEmailExist._id)
            res.status(200).json({
                success:true,
                message:"email sent successfully ",
                token:token
            })
        }else{
            res.status(404).json({
                success:false,
                message:"user with this email is not found",
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
    const {id,token}=req.params
    const {newpassword,confirmPass}=req.body
    try{
        const isVenderExist=await vender.findById(id)
        if(isVenderExist){
            jwt.verify(token,process.env.SECRETKEY)
            if(newpassword==confirmPass){
                const salt=await bcrypt.genSalt(10)
                const password=await bcrypt.hash(confirmPass, salt)
                await vender.findByIdAndUpdate(isVenderExist._id,
                    {$set:{password:password}})
                    res.status(200).json({
                        success:true,
                        message:"password reset successfully"
                    })
            }else{
                res.status(400).json({
                    success:false,
                    message:"password doesn't match"
                })
            }
        }else{
            res.status(404).json({
                success:false,
                message:"user doesn't exist"
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
    registerVender,
    loginVender,
    emailForResetPassword,
    resetPassword
}