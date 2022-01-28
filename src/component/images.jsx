import React from "react";
import { useState } from "react";
//import Childc from "./productdetails";
const Images=()=>{
    const cardInfo=[
        {images:"https://fakeimg.pl/300/",title:"Apple",text:""},
        {images:"https://fakeimg.pl/300/",title:"Mango",text:""},
        {images:"https://fakeimg.pl/300/",title:"Banana",text:""},
        {images:"https://fakeimg.pl/300/",title:"Mango",text:""},
        {images:"https://fakeimg.pl/300/",title:"Apple",text:""},
        {images:"https://fakeimg.pl/300/",title:"Mango",text:""},
        {images:"https://fakeimg.pl/300/",title:"Banana",text:""},

    ];
  

    const [data, setData] = useState({})
    const [clickdata,setclickdata]=useState(cardInfo)//state for display cards in reactjs
    const [Searchitem,setSearchitem]=useState('');
  
  const parentToChild=(d)=>{
    //   setData(d)
    console.log(d);

    setData([...data,d])
  }
  const getSearchddata=()=>{
    const c=cardInfo.filter((e)=>e.title.toLowerCase()===Searchitem.toLowerCase());
    setclickdata(c);
  }


  const getclickeddata=(d)=>{
  const c=cardInfo.filter((e)=>e.title===d);
    setclickdata(c);
  }

    const renderCard=(card,index)=>{
    return(

<div className="col-md-3 mt-5" key={index}> 
<div className="card mx-3" style={{"width":"18rem"}}>
<img src={card.images} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{card.title}</h5>
  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  <button className="btn btn-primary" onClick={()=>parentToChild(card)}>Add</button>
  </div>

</div>
</div>

);};
return (<div className="App">
  
{/*       <div className="bg-primary">
        <Childc parentToChild={data}/></div> */}
        <div className="block mt-4">
     

  <nav className="navbar navbar-light bg-light justify-content-between">
  <button className="btn btn-primary" onClick={()=>getclickeddata('Mango')}>Mango</button>
        <button className="btn btn-primary" onClick={()=>getclickeddata('Apple')}>Apple</button>
        <button className="btn btn-primary" onClick={()=>getclickeddata('Banana')}>Banana</button>
  <div className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search...." aria-label="Search" value={Searchitem} onChange={(e) => setSearchitem(e.target.value)}/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={()=>getSearchddata('t')}>Search</button>
  </div>
</nav>










        </div>
 
        
   


    
      <div className="row">
        {clickdata.map(renderCard)}
    
      
      </div>
  </div>
  )}
export default Images;

