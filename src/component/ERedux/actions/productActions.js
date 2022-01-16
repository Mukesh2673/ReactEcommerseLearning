import {ActionTypes} from '../contants/action-types'


export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS, 
        payload:products,
    };
};
export const selectedProduct=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,
    };
};
export const removeSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    
    };
};
export const addtocart=(products)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:products
    };
};

export const removetocart=(products)=>{
    return{
        type:ActionTypes.REMOVE_TO_CART,
        payload:products
    };
};
