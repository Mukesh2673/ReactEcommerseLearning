import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios' 


 axios.defaults.withCredentials = true;
   export function Login()
    {
        const navigate = useNavigate();
        const [Username,setName]=useState("")
        const [password,setpassword]=useState("")
    
     
    
       async function signin(event)
       {
               event.preventDefault();
               alert('form submited')
               setName('');
               setpassword('');
          
           console.log(Username,password)
           let userdata={
            username:Username,
            password:password,
                    }
    
       await axios.post("http://localhost:1100/submited/login",userdata)
           .then((response)=>{
           if(response.status===200)
           {
            console.log(response);
            ///navigate("/register")
            alert('login successful')
        }
       
           })
           .catch(function(error){
           let t=({error}).error.response.data.message;
        console.log(t);
         
           })
      
       } 
    
    
    
























    
        return (
            <div style={{"display":"flex","justifyContent":"center","marginTop":"140px"}} >
            <div className="card" style={{"width": "24rem"}}>
            <div className="card-body">
                <form onSubmit={signin}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Username" value={Username} onChange={(e) => setName(e.target.value)} required />
        
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  value={password} onChange={(e) => setpassword(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                 <Link to="/register">Register</Link>
                </p>
 
            </form>
            </div>
          </div>
          </div>
        );
    }
        export default Login