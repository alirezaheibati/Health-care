import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { spinnerVisibility: false },
  reducers: {
    showSpinner(state) {
      state.spinnerVisibility = true;
    },
    hideSpinner(state) {
      state.spinnerVisibility = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
