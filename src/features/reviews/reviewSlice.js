import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({ id: uuid(), ...action.payload });
    },
    reviewRemoved(state, action) {
      const index = state.entities.findIndex(
        (r) => r.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
});


export const { reviewAdded, reviewRemoved } = reviewSlice.actions;

export default reviewSlice.reducer;