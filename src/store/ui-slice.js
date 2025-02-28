import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    spinnerVisibility: false,
    cartVisibility: false,
    errorModal: { visibility: false, title: "", message: "" },
  },
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
    showErrorModal(state, action) {
      state.errorModal = {
        visibility: true,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
    hideErrorModal(state) {
      state.errorModal = { visibility: false, message: "", title: "" };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
