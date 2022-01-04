import React from "react";
const Images=()=>{
    const cardInfo=[
        {images:"https://fakeimg.pl/300/",title:"lebron james",text:""},
        {images:"https://fakeimg.pl/250x110/",title:"lebron james",text:""},
        {images:"https://fakeimg.pl/250x100/",title:"lebron james",text:""},
    ];


    const renderCard=(card,index)=>{
    return(
    

        
<div className="card" style={{"width":"18rem"}} key={index}>
<img src={card.images} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{card.title}</h5>
  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>
    
);};
return (<div className="App">{cardInfo.map(renderCard)}</div>)}
export default Images;

