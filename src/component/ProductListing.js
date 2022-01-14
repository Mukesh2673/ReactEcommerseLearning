import React,{useEffect} from 'react'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import {setProducts} from '../component/ERedux/actions/productActions'
import ProductComponent from './ProductComponent';
const ProductListing=()=>{
const products=useSelector((state)=>state);
const dispatch=useDispatch();
const fetchProducts=async ()=>{
const response=await axios
.get("https://fakestoreapi.com/products")
.catch((err)=>{
    console.log("Err",err);
});
dispatch(setProducts(response.data));
};
useEffect(()=>{
    fetchProducts();
},[]);


return(
    <div class="container">
                    <div className="row bg-primary">
                    <ProductComponent/>
                    </div>
     
            
        </div>
    );
};
export default ProductListing