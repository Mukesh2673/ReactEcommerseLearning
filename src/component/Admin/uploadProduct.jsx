import React, { useState } from 'react';
import axios from 'axios'
import './uploadProduct.css'
import  Progress from './imageupload/Progress'
export default function UploadProduct(){
const [upload,setupload]=useState();
const [progress, setProgress] = useState(0)
const [inputs,setInputs]=useState({});
const handleChange=(event)=>{
  
  const name=event.target.name;
  const value=event.target.value;
  setInputs(values=>({...values,[name]:value})) 

}








let test=(e)=>{

    setupload(e.target.files[0]);
}
const upload1= async(e)=>{
console.log(inputs);
  e.preventDefault()
  const formData=new FormData()
  formData.append('profileImg',upload)
  console.log(upload);
  const response=await axios
    .post("http://localhost:3000/upload",formData,{     
    onUploadProgress :data => {
      setProgress(parseInt(Math.round((100 * data.loaded) / data.total))
      )
      setTimeout(()=>setProgress(0),10000);
    },
  
    }).then(res=>{
      console.log(res);
 
    })
    .catch((err)=>{
        console.log("Err",err);
    });
 

}



return(
        <div className="container layoutt mt-5 card" style={{width: '38rem'}}>
            <div className="row">
                <form onSubmit={upload1}>
                    <div className="form-group">
                        <input type="file" onChange={test} required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload</button>
                    </div>
                     
                       <div className="mt-2">
                       <label>title
                       <input 
                      type="text" 
                      name="title" 
                      value={inputs.title || ""} 
                      onChange={handleChange}
                      />
                   </label>
                       </div>
                <div className="mt-2">
                <label>
                     Price
                     <input
                     type="text"
                     name="price"
                     value={inputs.price || ""}
                     onChange={handleChange}
                    /> 
                </label>

                </div>
                 <div className="mt-2"> 
                 <label>
                     description
                     <input
                     type="text"
                     name="description"
                     value={inputs.description || ""}
                     onChange={handleChange}
                    /> 
                    </label>


                 </div>
                 <div className="mt-2">
                 <label>
                    category
                     <input
                     type="text"
                     name="category"
                     value={inputs.category || ""}
                     onChange={handleChange}
                    /> 
                    </label>
            </div>
                   
      
  



                    <Progress percentage={progress}/>
                   
                <button className="btn mt-2 btn-primary">Submit</button>
      
                </form>


       




              
            </div>
       
        </div>
    )
  
}
