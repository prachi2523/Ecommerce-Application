const express = require ('express')
const router = express.Router()
const product = require ('../controller/productController')
const {upload}= require('../middlewares/imageStorage')

router.post("/add/:id",upload.single("productImage"),product.addProduct)
router.get("/list",product.productList)
router.get("/detail/:id",product.productDetails)
router.delete("/delete/:id",product.productDelete)
router.patch('/edit/:id',product.editProduct)

module.exports = router;
