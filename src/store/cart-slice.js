import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.objectId === action.payload.objectId
      );
      if (itemIndex === -1) {
        state.cartItems.push({ ...action.payload, cartCount: 1 });
      } else {
        state.cartItems[itemIndex].cartCount += 1;
      }
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.objectId === action.payload
      );
      if (state.cartItems[itemIndex].cartCount > 1) {
        state.cartItems[itemIndex].cartCount -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.objectId !== action.payload
        );
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
