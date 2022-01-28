import React from 'react'
import { buyCake } from '../component/Redux/cake/cakeAction'
import {connect} from 'react-redux'
import HooksCakeContainer from './Redux/cake/HooksCakeContainer'
import IceCreamContainer from './Redux/iceCreamContainer'
import  NewIceCreamContainer from './Redux/NewCakeContainer'
 const counter=(props)=>{
  return (
    <div>
      <h1>Number of cakes-{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    <HooksCakeContainer/>
    <IceCreamContainer/>
    < NewIceCreamContainer />
    </div>
  )
}

const mapStateToProps=state=>{
 
  return{
    numOfCakes:state.cake.numOfCakes
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(counter)