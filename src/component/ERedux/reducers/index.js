import { combineReducers } from "redux";
import { productReducer,selectedProductReducer,Addtocart,Removetocart,Cartfeature } from "./productReducer";
const reducers=combineReducers({

 allProducts: productReducer,
 product:selectedProductReducer,
 Cart:Cartfeature,
});
export default reducers