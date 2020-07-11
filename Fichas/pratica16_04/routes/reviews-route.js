const express=require('express')
const reviewController=require('../controllers/reviewsController')
const reviewRouter=express.Router()

//reviewRouter.get('/all',reviewController.getAllReviews)
reviewRouter.get('/',reviewController.createReview)
reviewRouter.post('/',reviewController.saveReview)
reviewRouter.get('/all',reviewController.getAllReviews)
reviewRouter.post('/:id',reviewController.getReviewById)
reviewRouter.post('/:email/:livro', reviewController.getReviewByMailName)


module.exports=reviewRouter