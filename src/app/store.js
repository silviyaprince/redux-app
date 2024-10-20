import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
import priceReducer from "../slices/priceSlice"
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        price:priceReducer,

    }
})