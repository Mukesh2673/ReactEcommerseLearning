import { BUY_ICECREAM } from "./iceCreamType";
export const buyIceCream = (number=1) => {
    console.log(number);
    return{
        type:BUY_ICECREAM,
        payload:number
    }
}