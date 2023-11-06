const express=require('express')
const productRouter=express.Router()
const cart=require('../model/productSchema')



productRouter.post("/add-cart",(req,res)=>{
    const data = new cart({
      id:req.body.id,
      title:req.body.title,
      category:req.body.category,
      price:req.body.price,
      image:req.body.image,
    })
    data.save()
    .then((data)=>{
      return res.status(201).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "can't add to the cart",
      });
    })
  })
  productRouter.get("/view-cart",(req,res)=>{
    cart
    .find()
    .then((data) => {
      return res.status(201).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Cart can't be viewed",
      });
    });
  })

  productRouter.delete('/delete-product/:id',(req,res)=>{
    cart.deleteOne({
      id:req.params.id
    })
      .then((data)=>{
          return res.status(201).json({
              success:true,
              error:false,
              data:data

            })
      })
      .catch((error)=>{
          return res.status(400).json({
              success:false,
              error:true,
              Message:"product is not added"
          }

          )
      })
  })
  productRouter.delete('/delete-all', (req, res) => {
    cart.deleteMany() // This will delete all items in the cart
      .then((data) => {
        return res.status(200).json({
          success: true,
          error: false,
          message: 'All items in the cart have been deleted.',
        });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Failed to delete all items from the cart",
        });
      });
  });

  module.exports=productRouter;