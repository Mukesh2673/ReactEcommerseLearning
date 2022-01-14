import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from './ERedux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  if (product) {

    var { id, title, image, price, description,category } = product;
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

              <a href="#" class="btn btn-primary">ADD To CART</a>
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