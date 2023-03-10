const mongoose=require('mongoose')

const venderSchema=new mongoose.Schema({
    venderName:{
        type:String,
        required:true
    },
    venderEmail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    venderAbout:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"vender"
    },
    // venderPic:{
    //     type:String,
    //     required:true
    // },
    address:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }

})
venderSchema.set('timestamps',true)
module.exports=mongoose.model('vender',venderSchema)