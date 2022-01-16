import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((product,index) => {
        const { id, title, image, price, description } = product;
        return (

           
           

             
                    <div className="col-md-4" key={index}>
                   
                        <Link to={`/product/${id}`}>

                            <div className="card mt-1" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={image} alt={title} />
                                <div className="card-body">
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