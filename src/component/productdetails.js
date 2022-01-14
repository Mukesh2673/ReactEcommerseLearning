import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useDispatch,useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from './ERedux/actions/productActions';

const ProductDetail = () => {
  const product=useSelector((state)=>state.product);

  if(product[0])
  {
    var {id,title,url}=product[0];
  }

  const {productId}=useParams();
  const dispatch=useDispatch();

  const fetchProductDetail=async()=>{
    const response=await axios
    .get(`https://jsonplaceholder.typicode.com/photos?id=${productId}`)
    .catch((err)=>{
      console.log("Err",err);
    });

  
    dispatch(selectedProduct(response.data));
  };
  useEffect(()=>{
    if(productId && productId !== "") fetchProductDetail();
    return()=>{
      dispatch(removeSelectedProduct());
    };
},[productId]);
    return (
      <div className="four column wide" key={id}>

            {Object.keys(product).length ===0 ? (
              <div>.....loading</div>
            ):
            (
              <div className="ui link cards">
              <div className="card">
                  <div className="image">
                      <img src={url} alt={title}/>
                  </div>
                      <div className="content">
                          <div className="header">
                            {title}
                          </div>
                      </div>
                  
              </div>
          </div>

            )

          
          }
        
        </div>
    )
  }
  export default ProductDetail