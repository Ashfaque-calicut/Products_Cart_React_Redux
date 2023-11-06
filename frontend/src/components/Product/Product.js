import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import Alert from 'react-bootstrap/Alert'
import { getProducts } from '../Reducer/ProductsSlice';
import { postCartProducts } from '../Reducer/CardSlice';
import { useNavigate } from 'react-router-dom';
const Product = () => {
  const data=useSelector((state)=>state.products.data);
  const status=useSelector((state)=>state.products.status);
  const dispatch=useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    // setLoading(true);
    // axios.get("https://fakestoreapi.com/products")
    //   .then((res) => {
    //     console.log(res.data);
    //     setData(res.data.slice(0,10));
    //   })
    //   .catch((error) => console.log(error))
    dispatch(getProducts())
  }, [dispatch]);

  if(status==='loading'){
    return <h1 className='text-center'>Loading...</h1>
  }
  if(status==='error'){
    return(
      <Alert className='text-center' key="danger" variant='danger'>Error While loading! Try again later</Alert>
    )
  }
 const addToCart=(product)=>{
  dispatch(postCartProducts(product));
  navigate('/cart')
  window.location.reload();

 }


  return (
    <div className='products-container'>
      {data.map((product) => ( 
        <div key={product.id} className='card'>
          <div><img src={product.image} alt='#' /></div>
          <div className='card-description'>
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
            <button className='btn btn-success' onClick={()=>addToCart(product)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
