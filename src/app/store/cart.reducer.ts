import { CartAction, CartActionTypes } from "./cart.actions";
import { Product } from "../Product";

const initialState: Product[] = [];

export function CartReducer(state: Product[] = initialState, action: CartAction) {
    switch(action.type) {
        //Add
        case CartActionTypes.ADD_ITEM:
            //combine update item and add item from sample web app
        //Delete
        case CartActionTypes.DELETE_ITEM:
            return state.filter(item => item != action.payload);
        //Default
        default:
            return state;
    }
}