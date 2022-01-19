import React, { useState  } from 'react'


import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import { removetocart} from './ERedux/actions/productActions';

const CartProductdetails = () => {
   
    const dispatch = useDispatch();
      const product = useSelector((state) => state.product);

          
      const test=useSelector((state)=>state.Cart.cartitem);
      const test2=useSelector((state)=>state.Cart.cartproducts);
      
  
      
      const [data, setData] = useState(test2)
    

const removecart=(t)=>{
dispatch(removetocart(t));
}

     
    
    
        const renderCard=(card,index)=>{
            return(
        
        

  
            <tbody key={index}>
                <tr>
                <td scope="row"><img className="img-thumbnail" src={card.image} style={{ width: '5rem' }} /></td>
                <td>{card.counter}</td>
                <td>{card.price}</td>
                <td>{card.title}</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>removecart(index)}>Remove</button></td>
                </tr>
            
            </tbody>
 
    
     
    
       
      )
    }



    return (<div className="App">
      <Header/>
        <div className="container">
            <div className="row mt-5">
          <table className="table">
          <thead >
                <tr>
                <th scope="col">Products</th>
                <th scope="col">item</th>
                <th scope="col">Price</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
          {data?.map(renderCard)}

          </table>
           
            </div>
            
          </div>
          <div className="row mt-1">
        <div className="col-11" style={{display:'flex',justifyContent:'right'}}> 
           <Link to={'/userdetails'}>
      <button type="button" className="btn btn-warning  text-dark" style={{width:'220px',borderRadius:'20px',
      fontWeight: 'bold' 
    
    
    }}>PlaceOrder</button>
    </Link>
      </div>
    </div>
  


          </div>  
    
      )}








export default CartProductdetails;