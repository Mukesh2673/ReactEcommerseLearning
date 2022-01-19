import React, { useEffect } from 'react'
import {BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
const Header =()=>{

    const test=useSelector((state)=>state.Cart.cartitem);
    localStorage.setItem('cartitem', test);

    const test2=useSelector((state)=>state.Cart.cartproducts);
       /*  localStorage.setItem('cartproducts', JSON.stringify(test2)); */
    useEffect(()=>{

        localStorage.setItem('cartproducts', JSON.stringify(test2));
        
    },[test]);

    let itemlist=localStorage.getItem('cartitem');
    let b=JSON.parse(localStorage.getItem('cartproducts'))


   
   if(b?.length<1)
    {
        localStorage.setItem('cartitem', 0);
    }  
    return(
   


            <div className="container mt-2">
                <div className="row bg-primary" style={{position:'relative',display:'flex',justifyContent:'right'}}>
                    {
                        itemlist>0 ?



            
                    (<>
                                 
                    <Link to={'/cart'}>

                    <BsFillCartCheckFill style={{color: 'yellow', fontSize: '60px',marginLeft: 'auto', marginRight: 0}}/>
                        <span style={{color: 'white',fontSize:'15px', position:'absolute',marginLeft:'-20px',background:'red',
                         borderRadius:'50%',width:'20px',height:'20px',fontWeight: 'bold'}}>&nbsp;{itemlist}</span>
                    </Link>
                    </>
                    ):
                   ( 
                       <>
                
                       <Link to={'/basket'}>
                    <BsFillCartCheckFill style={{color: 'yellow', fontSize: '60px',marginLeft: 'auto', marginRight: 0}}/>
                        <span style={{color: 'white',fontSize:'15px', position:'absolute',marginLeft:'-20px',background:'red',
                         borderRadius:'50%',width:'20px',height:'20px',fontWeight: 'bold'}}>&nbsp;{itemlist}</span>     
                  </Link>
                  </> )
                        }
               
               
                         </div>
              </div>
    )
};
export default Header;
