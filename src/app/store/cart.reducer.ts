import { CartAction, CartActionTypes } from "./cart.actions";
import { CartItem } from "../cart-item.model";

const initialState: CartItem[] = [];

export function CartReducer(state: CartItem[] = initialState, action: CartAction) {
    switch(action.type) {
        //Add
        case CartActionTypes.ADD_ITEM:
            //combine update item and add item from sample web app
        //Delete
        case CartActionTypes.ADD_ITEM:
            return state.filter(item => item != action.payload);
        //Default
        default:
            return state;
    }
}