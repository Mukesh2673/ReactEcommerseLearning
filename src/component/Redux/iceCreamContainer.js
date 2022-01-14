import React from 'react'
import { buyIceCream } from '../Redux/iceCream/iceCreamAction'
import {connect} from 'react-redux'
 const IceCreamContainer=(props)=>{
  return (
    <div>
      <h1>Number of Icecreams-{props.numOfIceCreams}</h1>
    
      <button onClick={props.buyIceCream}>Buy Icecream</button>

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
    buyIceCream:()=>dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)