const mongoose=require('mongoose');

const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
    },
    reviewImage:{
        type:String
    },
    rating:{
        type:Number
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    isActive:{
        type:Boolean
    }
})

reviewSchema.set('timestamps',true)
module.exports=mongoose.model('review',reviewSchema)