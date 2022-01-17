import { combineReducers } from "redux";
import cakereducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import  userReducer from './Users/userReducer'
const rootReducer=combineReducers({
    cake:cakereducer,
    iceCream:iceCreamReducer,
    user:userReducer
})
export default rootReducer