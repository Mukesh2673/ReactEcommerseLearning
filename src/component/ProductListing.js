import React,{useEffect} from 'react'
import axios from 'axios';
import {useDispatch } from 'react-redux';
import {setProducts,addtocart} from '../component/ERedux/actions/productActions'
import ProductComponent from './ProductComponent';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const ProductListing=()=>{



const [date, setDate] = useState('')
const dispatch=useDispatch();
const fetchProducts=async ()=>{

const response=await axios
.get("http://localhost:3000/data")
.catch((err)=>{
    console.log("Err",err);
});

setDate(response.data);

//dispatch(setProducts(response.data));


let b=response.data.slice(pageNumber,4).map((t)=>t)
console.log('sliced',b);
dispatch(setProducts(b));   
console.log(pageNumber);


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
const [pageNumber,setPageNumber]=useState(0)
const dataPerPage=6
const pagesVisited=pageNumber * dataPerPage
//const pageCount=Math.ceil(users.length / dataPerPage);
const changePage=({selected}) =>{
    //setPageNumber(selected)
    
    console.log('select',selected)
    console.log('selected',selected+1)
    setPageNumber(selected+1)
   

    console.log('pagenumber',pageNumber);
    console.log('pagesvisited',pagesVisited);


    let b=date.slice(pagesVisited,pagesVisited+dataPerPage).map((t)=>t)
    console.log('sliced',b);
    dispatch(setProducts(b));
    //console.log('arun',b);
  
};

//https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3  set limit to page




/*----------------------------- pagination Code -------------------------------*/


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
              pageCount={4}
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