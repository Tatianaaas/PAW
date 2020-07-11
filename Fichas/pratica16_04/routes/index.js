const express=require("express")
const router= express.Router()
const reviewRouter=require("./reviews-route")

router.get('/',(req,res)=>{
    res.send({
        status:'ok'
    })
})

router.use('/review',reviewRouter)

module.exports=router

