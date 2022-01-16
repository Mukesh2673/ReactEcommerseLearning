import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removeSelectedProduct, selectedProduct } from './ERedux/actions/productActions';
import { Addtocart } from './ERedux/reducers/productReducer';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  if (product) {

    var { id, title, image, price, description,category } = product;
  }
  const test=useSelector((state)=>state.addtocart.cartitem);
  const test2=useSelector((state)=>state.addtocart);

  console.log(test2);
  const addtocart1=(t)=>{
    console.log('ok');
    dispatch(addtocart(t));
  }

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });


    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      <div className="row bg-primary" style={{position:'relative',display:'flex',justifyContent:'right'}}>
      <Link to={'/cart'}>
              <BsFillCartCheckFill style={{color: 'yellow', fontSize: '60px',marginLeft: 'auto', marginRight: 0}}/>
              <span style={{color: 'black',fontSize:'28px', position:'absolute',marginLeft:'-25px'}}>{test}</span>
        </Link>      
              </div>
      
      <div className='row mt-5'>
      <div className='col-md-6'>

      {Object.keys(product).length === 0 ? (
        <div>loading......</div>
      ) :
        (
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-title">{price}$</h5>
              <h5 className="card-title">{category}</h5>

              <button type="button" className="btn btn-success"  onClick={()=>addtocart1(product)}>Addtocart</button>
              

            </div>
          </div>

        )}

      </div>
      <div className='col-md-3'>
        <p>{description}</p>
      </div>

      </div>
      </div>



 

   
  )
}
export default ProductDetail