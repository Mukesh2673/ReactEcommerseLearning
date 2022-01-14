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
.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
.catch((err)=>{
    console.log("Err",err);
});

dispatch(setProducts(response.data));

};
useEffect(()=>{
    fetchProducts();
},[]);

//console.log("products:",products);

return(
        <div className='ui grid container'>
        <h1><ProductComponent /></h1>
            
        </div>
    );
};
export default ProductListing