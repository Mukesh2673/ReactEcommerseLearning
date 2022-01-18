import {
    ActionTypes
} from '../contants/action-types'
const initialState = {
    products: [],
};
const initialCart = {
    cartproducts: [],
    cartitem: 0

}
export const productReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, products: payload
            };
        default:
            return state;
    }
};
export const selectedProductReducer = (state = initialState, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...payload
            };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const Cartfeature = (state = initialCart, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            let oldProducts = state.cartproducts
            let checkProduct=state.cartproducts?.filter(product=>product.id==payload.id)
            //checkProduct
            //if product does not exists in the array
            if(!checkProduct.length>0)
            {
                let product={...payload,counter:1}
                oldProducts.push(product)
                
            }
            else{
                checkProduct[0].counter++
            }

            return {

                ...state,
                cartitem: state.cartitem + 1,
                    cartproducts: [...oldProducts]


            };
        case ActionTypes.REMOVE_TO_CART:
            let newCartItem = state.cartitem - 1
            state.cartproducts.splice(payload,1);
    


            return {
                ...state,
                cartitem: newCartItem,
                cartproducts:state.cartproducts

                    //cartproducts: payload,
            };

        default:
            return state;
    }

};
