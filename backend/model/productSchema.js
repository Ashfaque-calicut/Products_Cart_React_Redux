const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model('cart',productSchema);
