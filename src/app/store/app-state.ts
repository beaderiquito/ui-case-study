import { Product } from "../Product";

export interface AppState {
    readonly cart: Product[];
}