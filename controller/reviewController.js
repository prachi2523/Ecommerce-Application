const reviewSchema=require('../model/reviewSchema')

const addReview=async(req,res)=>{
    try {
        const userId=req.params.uid
        const productId=req.params.pid
        const review = await new reviewSchema(req.body)
        review.userId = userId
        review.productId = productId
          await review.populate({
                path: "userId",
                select: "userName profilePic"
            })
        await review.save();
        res.status(201).json({
            success: "success",
            message: "review added successfulyy",
            data: review
        })
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: err.message
        })
    }
}

const deleteReview=async(req,res)=>{
    const rid=req.params.id
    try{
        reviewSchema.findByIdAndDelete({rid:rid})
        res.status(200).json({
            success:true,
            message:"review deleted successfully"
        })
}catch(error){
    res.status(400).json({
        success:false,
        message:"error occured "+error.message
    })
}
}

const rating = async (req, res) => {
    // try {
    //     const {rating } = req.body
    //     const blog = await blogSchema.findById(req.params.id)
    //     if (blog) {
    //         if (blogLike == true) {
    //             await blog.updateOne({ $set: { blogLike: ++blog.blogLike } })
    //             res.status(202).json({
    //                 success: "success",
    //                 message: "you just like this blog",
    //                 data: blog.blogLike
    //             })
    //         }
    //         else {
    //             await blog.updateOne({ $set: { blogLike: --blog.blogLike } })
    //             res.status(202).json({
    //                 success: "success",
    //                 message: "you just dislike this blog",
    //                 data: blog.blogLike
    //             })
    //         }
    //     }
    // } catch (err) {
    //     res.status(400).json({
    //         success: "failure",
    //         message: "error occured " + err.message
    //     })
    // }
}

module.exports={
    addReview,
    deleteReview
}