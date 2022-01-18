import React from 'react';
import {BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
const Header =()=>{

    const test=useSelector((state)=>state.Cart.cartitem);
    return(
   


            <div className="container mt-2">
                <div className="row bg-primary" style={{position:'relative',display:'flex',justifyContent:'right'}}>
                    <Link to={'/cart'}>
                    <BsFillCartCheckFill style={{color: 'yellow', fontSize: '60px',marginLeft: 'auto', marginRight: 0}}/>
                        <span style={{color: 'white',fontSize:'15px', position:'absolute',marginLeft:'-20px',background:'red',
                         borderRadius:'50%',width:'20px',height:'20px',fontWeight: 'bold'}}>&nbsp;{test}</span>
                    </Link>      
                </div>
              </div>
    )
};
export default Header;
