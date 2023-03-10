const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
})