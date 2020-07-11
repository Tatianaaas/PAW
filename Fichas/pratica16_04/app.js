const express= require("express");
const app= express()
const indexRouter= require("./routes/index")


const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const PORT = process.env.PORT || 3000
const MONGO_DB_HOST = process.env.MONGO_DB_HOST || 'localhost'
const MONGO_BD_PORT = process.env.MONGO_BD_PORT || 27017
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'reviews'
mongoose
 .connect(
 `mongodb://${ MONGO_DB_HOST }:${ MONGO_BD_PORT }/${ MONGO_DB_NAME }`,
 {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 }
 )
 .then((mongoose) => {
 console.log('connected to mongo')
 })
 .catch(console.error)


app

.use(express.json())
.use(express.urlencoded({ extended: true }))
.set("view engine","ejs")
.use("/",indexRouter)


//ou no caso de nao querermos usar rotas
// .get(/reviews,(req,res)=>{
//res.render(pages/reviews,{list{} })
//})
.listen(PORT,() => {
    console.log("server started on http://localhost:3000")
})