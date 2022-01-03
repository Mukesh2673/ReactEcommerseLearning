import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios' 

axios.defaults.withCredentials = true;
function Register()
{
    const navigate = useNavigate();
    const [Username,setName]=useState("")
    const [password,setpassword]=useState("")
    const [Email,setemail]=useState("")
    const [Mobile,setMobile]=useState("")
 

   async function signup(event)
   {
           event.preventDefault();
           alert('form submited')
           setName('');
           setpassword('');
           setemail('');
           setMobile('');

       console.log(Username,password,Email,Mobile)
       let userdata={
        username:Username,
        password:password,
        Email:Email,
        Mobile:Mobile,
        Profile:'Student'
    }

   await axios.post("http://localhost:1100/submited/register",userdata)
       .then((response)=>{
       if(response.status===200)
       {
        console.log(response);
        navigate("/login")
       }
   
       })
       .catch(function(error){
       let t=({error}).error.response.data.message;
    console.log(t);
     
       })
  
   } 



        return (
            <div style={{"display":"flex","justifyContent":"center"}} className="mt-5">
            <div className="card" style={{"width": "24rem"}}>
            <div className="card-body">


            <form onSubmit={signup}>

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" className="form-control" placeholder="Username" value={Username} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={Email} onChange={(e) => setemail(e.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Mobile</label>
                    <input type="tel" className="form-control" placeholder="Enter Mobile" value={Mobile} onChange={(e) => setMobile(e.target.value)}/>
                </div>
                

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">sign in</Link>
                </p>
            </form>
            </div>
          </div>
          </div>
        );
    }
    export default Register