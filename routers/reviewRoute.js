const expreee=require('express')
const router=expreee.Router();
const review=require('../controller/reviewController')
const authorization=require('../middlewares/auth')

router.post('/add/:uid/:pid',authorization.auth,review.addReview)
router.delete('/delete/:id',review.deleteReview)

module.exports=router