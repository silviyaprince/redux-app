import { createSlice } from "@reduxjs/toolkit";
const initialState={
    price:0,
}

export const priceSlice=createSlice({
    name:"price",
    initialState,
    reducers:{
        multiply:(state,action)=>{
           state= state.price*action.payload
        }
    }
})

export const {multiply}=priceSlice.actions

export default priceSlice.reducer