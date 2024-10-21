import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalPrice: 0,
  quantities: {},
};

export const priceSlice = createSlice({
  name: "priceValue",
  initialState,
  reducers: {
    multiply: (state, action) => {
      const { productId, quantity, price } = action.payload;
      if (state.quantities[productId]) {
        state.totalPrice -= state.quantities[productId] * price;
      }

      state.quantities[productId] = quantity;

      state.totalPrice += quantity * price;
    },
  },
});

export const { multiply } = priceSlice.actions;

export default priceSlice.reducer;
