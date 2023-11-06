const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')

const mongoose=require('mongoose')

const productRouter=require('./routes/productRoutes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("database connected")})
.catch((err)=>console.log(err))

app.use('/api/cart',productRouter)




app.listen(process.env.PORT,function(){
    console.log("server started")
})







