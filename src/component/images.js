import React from "react";
import { useState } from "react";
import Productdetails from "./productdetails";
const Images=()=>{
const cardInfo=[
{images:"https://fakeimg.pl/300/",title:"lebron james",text:""},
{images:"https://fakeimg.pl/300/",title:"Mukesh james",text:""},
{images:"https://fakeimg.pl/300/",title:"Abhinav james",text:""},
];


const [data, setData] = useState([])

const parentToChild=(d)=>{
d=[...data,d.title]
console.log(d);

setData(d)
}

const renderCard=(card,index)=>{
return(



<div className="card mx-3" style={{"width":"18rem"}} key={index}>
<img src={card.images} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{card.title}</h5>
<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
<button className="bg-primary" onClick={()=>parentToChild(card)}>Add</button>

</div>
</div>

);};
return (<div className="App d-flex mx-2 mt-5">
  {cardInfo.map(renderCard)}
  <Productdetails parentToChild={data}/>
</div>)
}
export default Images;
