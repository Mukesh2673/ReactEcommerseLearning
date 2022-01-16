import React,{useEffect} from 'react'
import axios from 'axios';
import {useDispatch } from 'react-redux';
import {setProducts,addtocart} from '../component/ERedux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useState } from 'react';

const ProductListing=()=>{

    const [date, setDate] = useState('')
//const products=useSelector((state)=>state);
const dispatch=useDispatch();
const fetchProducts=async ()=>{

const response=await axios
.get("https://fakestoreapi.com/products")
.catch((err)=>{
    console.log("Err",err);
});

setDate(response.data);
dispatch(setProducts(response.data));
//dispatch(addtocart(response.data));
};
useEffect(()=>{
    fetchProducts();
},[]);



return(
    <div className="container">
                    <div className="row bg-primary">
<nav className="navbar navbar-light bg-primary justify-content-between">
    <div className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search...." aria-label="Search" />
    <button className="btn btn-outline-warning my-2 my-sm-0 bg-dark" type="submit">Search</button>
  </div>
</nav>
</div>
<div className="row">

                        
                   {(date.length>0 ? <ProductComponent/>:<h1>loading....</h1>)}
                    </div>
     
            
        </div>
        );}



export default ProductListing