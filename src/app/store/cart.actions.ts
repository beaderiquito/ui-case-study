import { Action } from "@ngrx/store";
import { CartItem } from "../cart-item.model";

export enum CartActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    DELETE_ITEM = '[SHOPPING] Delete Item'
}

//Add Item
export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM;
    constructor(public payload: CartItem) { }
}

//DeleteItem
export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DELETE_ITEM;
    constructor(public payload: CartItem) { }
}

export type CartAction = AddItemAction | DeleteItemAction;
