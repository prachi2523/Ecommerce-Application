const mongoose = require('mongoose')
const productModelSchema = new mongoose.Schema({
    productDescription: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        //required : true,
    },
    features: {
        type: String,
        required: true,
    },
    specifications: {
        type: String,
        required: true,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'user'
    // },
    venderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vender'
    },
    productRatings: {
        type: Number,
        default: "0"
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})
productModelSchema.set('timestamps', true)
module.exports = mongoose.model('product', productModelSchema)