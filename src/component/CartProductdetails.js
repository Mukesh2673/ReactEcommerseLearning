import React, { useEffectimport , useState  } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removeSelectedProduct, selectedProduct } from './ERedux/actions/productActions';
import { Addtocart } from './ERedux/reducers/productReducer';

const CartProductdetails = () => {
   
    const dispatch = useDispatch();
      const product = useSelector((state) => state.product);
          
      const test=useSelector((state)=>state.addtocart.cartitem);
      const test2=useSelector((state)=>state.addtocart.cartproducts);
      const [data, setData] = useState(test2)
        //var { id, title, image, price, description,category } = product;
        //{test2.map((d)=>console.log('render',d))}
        console.log('value',Object.values(test2));    
      console.log('test2',test2);
    
     
    
    
        const renderCard=(card,index)=>{
            return(
        
        

        <>           
        <thead key={index}>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{card.id}</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </>
 
    
     
    
       
      )
    }



    return (<div className="App">
        <div className="container">
            <div className="row mt-5">
          <table className="table">
          {data.map(renderCard)}

          </table>
           
            </div>
            
          </div>
          </div>  
    
      )}








export default CartProductdetails;