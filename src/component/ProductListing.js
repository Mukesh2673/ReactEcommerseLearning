import React,{useEffect} from 'react'
import axios from 'axios';
import {useDispatch } from 'react-redux';
import {setProducts,addtocart} from '../component/ERedux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductListing=()=>{

    const [date, setDate] = useState('')
//const products=useSelector((state)=>state);
const dispatch=useDispatch();
const fetchProducts=async ()=>{

const response=await axios
.get("http://localhost:3000/data")
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
const [Searchitem,setSearchitem]=useState('');

const products = useSelector((state) => state.allProducts.products);
const getSearchddata=(t)=>{
    //console.log(products);
    const c=products.filter((e)=>e.title.toLowerCase().includes(Searchitem.toLowerCase()));
    dispatch(setProducts(c));
}



return(
    <div className="container">
                    <div className="row bg-primary">
<nav className="navbar navbar-light bg-primary justify-content-between">
    <div className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search...." aria-label="Search"  onChange={(e) => setSearchitem(e.target.value)}/>
    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"  onClick={()=>getSearchddata('t')}>Search</button>
  
  
  
  </div>
</nav>
</div>
<div className="row">

                        
                   {(date.length>0 ? <ProductComponent search={Searchitem}/>:<h1>loading....</h1>)}
                    </div>
     
            
        </div>
        );}



export default ProductListing