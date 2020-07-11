var mongoose = require("mongoose");
var Reviews = require("../models/Reviews");

var reviewController={}

const createReview = async (req, res) => {
	//const reviewData = req.body
	res.render('../views/pages/homepage')
}

const saveReview= async(req,res)=>{
	try {
	  const result = await Reviews.create(req.body)
	  console.log(result)
	  } catch(e) {
	  res.send('error')
	  }

}

const getAllReviews = async (req, res) => {	
	const reviewsList = await Reviews.find()
	console.log(reviewsList)
	res.render('../views/pages/lists',{list: reviewsList})
}
const getReviewById = async (req, res) => {
		console.log('ID', req.params.id)
	try {
		const reviewId = await Reviews
			.findOne(req.params.id)
			.catch((e) => {
				return null
            })
        console.log(reviewId)
		res.render('../views/pages/reviews', {review:reviewId})
	} catch (e) {
		console.error(e)
		res.status(404)
		res.send(null)
	}

}

const getReviewByMailName = async (req, res) => {
	try {
		const reviewMailBook = await Reviews
			.find(req.params.mail)
			.catch((e) => {
				return null
            })
        console.log(reviewMailBook)
		res.render('../views/pages/reviews', {review:reviewMailBook})
	} catch (e) {
		console.error(e)
		res.status(404)
		res.send(null)
	}
}



const updateReviews = async (req, res) => {
	const oldReviews = await Reviews.findByIdAndUpdate(
		req.params.ReviewsId,
		req.body
	)
	const newReviews = await Reviews.findById(req.params.ReviewsId)
	res.send({
		old: oldReviews,
		new: newReviews
	})
}

const deleteReview  = async (req, res) => {
	const deleteReview = await Reviews.findByIdAndRemove(req.params.ReviewId)
	res.send(deleteReview)
}

module.exports = {
	createReview,
	saveReview,
	getAllReviews,
    getReviewById,
    getReviewByMailName,
	updateReviews,
	deleteReview
}
