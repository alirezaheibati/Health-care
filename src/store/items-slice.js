import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [] },
  reducers: {
    setItems(state, action) {
      state.items = action.payload.map((item) => {
        return { ...item, createdAt: Date.parse(item.createdAt) };
      });
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
