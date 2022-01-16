import {ActionTypes} from '../contants/action-types'
const initialState={
    products:[],
};
const initialCart={
    cartproducts:[],
    cartitem:0

}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
         default:
             return state;   
    }
};
export const selectedProductReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return{...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{};
        default:
            return state;
    }
};

export const Addtocart=(state=initialCart,{type,payload})=>{
    switch(type){
        case ActionTypes.ADD_TO_CART:
            return {
                
                ...state,
                cartitem:state.cartitem+1,
                cartproducts:{...state.cartproducts,[state.cartitem]:payload}
            
            
            };
         default:
             return state;   
    }

};