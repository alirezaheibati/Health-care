import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [], itemsFilterVisibility: false, filterdItems: [] },
  reducers: {
    setItems(state, action) {
      state.filterdItems = state.items = action.payload.map((item) => {
        return { ...item, createdAt: Date.parse(item.createdAt) };
      });
    },
    sortItems(state, action) {
      if (action.payload === "date-desc") {
        state.filterdItems = state.items.toSorted(
          (a, b) => b.createdAt - a.createdAt
        );
      } else if (action.payload === "price-desc") {
        state.filterdItems = state.items.toSorted((a, b) => b.price - a.price);
      } else if (action.payload === "price-asc") {
        state.filterdItems = state.items.toSorted((a, b) => a.price - b.price);
      } else {
        state.filterdItems = state.items.toSorted(
          (a, b) => a.createdAt - b.createdAt
        );
      }
    },
    toggleFilterModal(state) {
      state.itemsFilterVisibility = !state.itemsFilterVisibility;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
