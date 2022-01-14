import React,{useState} from 'react'
import { buyIceCream } from '../Redux/iceCream/iceCreamAction'

import {connect} from 'react-redux'
 const NewIceCreamContainer=(props)=>{
    const [number,setNumber]=useState(1)
    return (
    <div>
      <h1>Number of Icecreams-{props.numOfIceCreams}</h1>
      <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
   {console.log(props)}
      <button onClick={()=>props.buyIceCream(number)}>Buy {number} Icecream</button>
 
    </div>
  )
}

const mapStateToProps=state=>{
  return{
    numOfIceCreams:state.iceCream.numOfIceCreams
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyIceCream:number=>dispatch(buyIceCream(number))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewIceCreamContainer)