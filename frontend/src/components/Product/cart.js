import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCartProducts, deleteCartProducts, getCartProducts } from '../Reducer/CardSlice';



const Cart = () => {
    const data=useSelector((state)=>state.cart.viewCart);
    const status=useSelector((state)=>state.cart.cartStatus);
    const dispatch=useDispatch();
    useEffect(() => {
   
        dispatch(getCartProducts())
      }, [dispatch]);

      const removeItem=(id)=>{
        dispatch(deleteCartProducts(id));
        window.location.reload();

      }
      const removeAllItems = () => {
        dispatch(deleteAllCartProducts());
        window.location.reload();

      };
  return (
    <>
    
    <div className='products-container' style={{minHeight:'600px'}}>
      {data.map((product) => ( 
        <div key={product.id} className='card'>
          <div><img src={product.image} alt='#' /></div>
          <div className='card-description'>
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
            <button className='btn btn-danger' onClick={()=>removeItem(product.id)} >Remove</button>
           
          </div>
        </div>
      ))} 
    </div>
    <div>
      <center>
        <button className='btn btn-danger' onClick={removeAllItems} >
          Remove All
        </button>
        </center>
      </div>
    </>
  )
}

export default Cart