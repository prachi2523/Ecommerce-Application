const nodemailer = require('nodemailer')
const dotenve = require('dotenv')

const sendMail = async (email,token,id) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "prachi.demo25@gmail.com",
                pass: "jurpihmrjzstbbeg"
            }
        })
        var mailOption={
            from:"prachi.demo25@gmail.com",
            to:email,
            subject:"password reset link",
            html:`<a href='http://127.0.0.1.6000/resetUserPassword/${id}/${token}'>click on this link to reset password</a>`
        }
        
        transporter.sendMail(mailOption,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log('email sent '+info.response)
            }
        })
    }catch(error){
        console.log(error);
    }
}

module.exports={sendMail}