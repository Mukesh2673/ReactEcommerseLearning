import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        console.log(product);
        const { id, title, image, price, description } = product;
        return (

           
           

             
                    <div className="col-md-4">
                        {id}
                        <Link to={`/product/${id}`}>

                            <div className="card mt-3" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={image} alt={title} />
                                <div className="card-body">
                                    <p className="card-title">{title}</p>
                                    <h5 className="card-title">{price}$</h5>
                                    <a href="#" class="btn btn-primary">Shop Now</a>
                                </div>
                            </div>

                        </Link>
                

   </div>



        );

    });
    return (
        <>{renderList}</>
    )


};
export default ProductComponent