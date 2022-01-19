import React from 'react'
import Header from './Header'
import { useNavigate } from "react-router-dom";
export default function Emptybasketpage() {
    let navigate = useNavigate();
 
    return (
               <div>
                     <Header/>
                    <div className="card mt-5" style={{width:'28rem', margin:'0 auto'}}>
                    <h1>Your Basket Is empty</h1>
                    <p>Shop today's deal</p>
                    <button type="button" className="btn btn-warning" onClick={()=>navigate('/predux')}>ADD TO Cart</button>
                </div>
        </div> 
      





    )
}
