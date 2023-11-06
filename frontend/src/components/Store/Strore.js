import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../Reducer/ProductsSlice";
import CardSlice from "../Reducer/CardSlice";

const store=configureStore({
reducer:{
    products:productSlice,
    cart:CardSlice
}
})

export default store;