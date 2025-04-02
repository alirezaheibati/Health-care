import { createSlice } from "@reduxjs/toolkit";

const businessCardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
    filterClause: "All Experties",
    experty: "Cardiologist",
  },
  reducers: {
    setCards(state, action) {
      state.cards = [...action.payload];
    },
    sortCards(state, action) {
      if (action.payload === "price-asc") {
        state.cards.sort((a, b) => b.fee - a.fee);
      } else if (action.payload === "price-desc") {
        state.cards.sort((a, b) => a.fee - b.fee);
      } else if (action.payload === "examined") {
        state.cards.sort((a, b) => b.patients - a.patients);
      } else {
        state.cards.sort((a, b) => b.rating - a.rating);
      }
    },
    setFilterClause(state, action) {
      state.filterClause = action.payload;
    },
    setExperty(state, action) {
      state.experty = action.payload;
    },
  },
});
export const cardsActions = businessCardsSlice.actions;
export default businessCardsSlice;
