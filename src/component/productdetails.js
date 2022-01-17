import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removeSelectedProduct, selectedProduct } from './ERedux/actions/productActions';
import Header from './Header'
//import images from '../../public/images/'

const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  if (product) {

    var { title, image, price, description,category } = product;
  }
  const test=useSelector((state)=>state.Cart.cartitem);
  //const test2=useSelector((state)=>state.addtocart);

  
  const addtocart1=(t)=>{
   
    dispatch(addtocart(t));
  }

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:3000/data/${productId}`)
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
             <Header/>
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
      <div className="row mt-1">
        <div className="col-12" style={{display:'flex',justifyContent:'right'}}> 
        <Link to={'/userdetails'}>
      <button type="button" className="btn btn-warning  text-dark" style={{width:'220px',borderRadius:'20px',
      fontWeight: 'bold' 
    
    
    }}>PlaceOrder</button>
    </Link>
      </div>
    </div>
  </div>



 

   
  )
}
export default ProductDetail