import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import itemsSlice from "./items-slice";
import cartSlice from "./cart-slice";
import businessCardsSlice from "./business-card-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    items: itemsSlice.reducer,
    cart: cartSlice.reducer,
    cards: businessCardsSlice.reducer,
  },
});
export default store;
