import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,Addtocart } from "./productReducer";
const reducers=combineReducers({

 allProducts: productReducer,
 product:selectedProductReducer,
 addtocart:Addtocart   
});
export default reducers