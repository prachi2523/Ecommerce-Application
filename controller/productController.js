const productSchema = require("../model/productSchema")

const addProduct = async (req, res) => {
    try {
        const productAdd = await new productSchema(req.body)
        productAdd.venderId = req.params.id
        const filePath = `/uploads/${req.file.filename}`;
        productAdd.productImage = filePath;
        try {
            const product = await productAdd.save();
            res.status(201).json({
                success: true,
                message: "product added successfully",
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                message: "Error occur" + err.message,
            });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error occur" + err.message,
        });
    }
}
const productList = async (req, res) => {
    try {
        const productList = await productSchema.find();
        res.status(200).json({
            success: true,
            message: "Product List are : ",
            data: productList,
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error occur " + err.message
        });
    }
}

const productDetails = async (req, res) => {
    //const id=req.params.id;
    try {
        const productDetail = await productSchema.findOne({ productId: req.params.id })
            .populate({
                path: "venderId",
                select: "venderName venderEmail city"
            })
        res.status(200).json({
            success: true,
            message: "Here is the detals of product",
            productDetail: productDetail,
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Error occur " + err.message
        });
    }
}

const productDelete = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteproduct = await productSchema.findByIdAndDelete(id);
        if (deleteproduct) {
            res.status(200).json({
                success: true,
                message: "Your product deleted successfully"
            })
        } else {
            res.status(400).json({
                success: false,
                message: "product not found"
            });
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const editProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const product = await productSchema.findByIdAndUpdate(productId, { $set: req.body })
        await product.save();
        res.status(201).json({
            success: true,
            message: "product edited successfully",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "error occured " + error.message
        })
    }
}

module.exports = {
    addProduct,
    productList,
    productDetails,
    productDelete,
    editProduct
}
