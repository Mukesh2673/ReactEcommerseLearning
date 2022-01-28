import React,{useEffect} from 'react'
import axios from 'axios';
import {useDispatch } from 'react-redux';
import {setProducts,addtocart} from '../component/ERedux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const ProductListing=()=>{



const [date, setDate] = useState([])
const dispatch=useDispatch();
const [dataPerPage,setdataPerPage]=useState(4)
const [pageSerial,setPageSerial]=useState(0)
const fetchProducts=async ()=>{

const response=await axios
.get("http://localhost:3000/data")
.catch((err)=>{
    console.log("Err",err);
});
setDate(response.data);
let b=response.data.slice(0,dataPerPage).map((t)=>t)
let totaldata=response.data.length
let c=Math.ceil(totaldata/dataPerPage)
setPageSerial(c)
dispatch(setProducts(b));   
};

useEffect(()=>{
    fetchProducts();
},[]);



const [Searchitem,setSearchitem]=useState('');

const products = useSelector((state) => state.allProducts.products);
const getSearchddata=(t)=>{
    const c=products.filter((e)=>e.title.toLowerCase().includes(Searchitem.toLowerCase()));
    dispatch(setProducts(c));
}


/*----------------------------- pagination Code -------------------------------*/
const [pageNumber,setPageNumber]=useState(1)

const changePage=({selected})=>{
    
   

    const pagenumber=selected+1;
    setPageNumber(pagenumber);
    const pageVisited=pagenumber * dataPerPage-dataPerPage
    const newpageVisited=pagenumber * dataPerPage;
    let b=date.slice(pageVisited,newpageVisited).map((t)=>t)
    dispatch(setProducts(b));
}



//https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3  set limit to page




/*----------------------------- End pagination Code -------------------------------*/


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
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageSerial}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
              onPageChange={changePage}
            />
</div>
 );}



export default ProductListing