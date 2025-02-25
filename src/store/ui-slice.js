import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { spinnerVisibility: false, cartVisibility: false },
  reducers: {
    showSpinner(state) {
      state.spinnerVisibility = true;
    },
    hideSpinner(state) {
      state.spinnerVisibility = false;
    },
    showCart(state) {
      state.cartVisibility = true;
    },
    hideCart(state) {
      state.cartVisibility = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
