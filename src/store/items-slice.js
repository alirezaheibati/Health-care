import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    itemsFilterVisibility: false,
    brand: "",
    tag: "",
    areInStock: false,
    price: { min: 0, max: 0 },
    filteredItemsCount: 0,
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload.map((item) => {
        return { ...item, createdAt: Date.parse(item.createdAt) };
      });
    },
    sortItems(state, action) {
      if (action.payload === "date-desc") {
        state.items.sort((a, b) => b.createdAt - a.createdAt);
      } else if (action.payload === "price-desc") {
        state.items.sort((a, b) => b.price - a.price);
      } else if (action.payload === "price-asc") {
        state.items.sort((a, b) => a.price - b.price);
      } else {
        state.items.sort((a, b) => a.createdAt - b.createdAt);
      }
    },
    toggleFilterModal(state) {
      state.itemsFilterVisibility = !state.itemsFilterVisibility;
    },
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setTag(state, action) {
      state.tag = action.payload;
    },
    setPrice(state, action) {
      state.price = {
        min: action.payload.min,
        max: action.payload.max,
      };
    },
    setAvailability(state) {
      state.areInStock = !state.areInStock;
    },
    setFilteredItemsCount(state, action) {
      state.filteredItemsCount = action.payload;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
