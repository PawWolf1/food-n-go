import { createSlice } from "@reduxjs/toolkit";
import { Food } from "../models/Food";

export interface FoodI {
  food: Food[];
}

const initialState: FoodI = {
  food: [],
};
export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    incrementAmount: (state, action) => {
      state.food[action.payload].amount += 1;
    },
    decrementAmount: (state, action) => {
      state.food[action.payload].amount -= 1;
    },
    clear: (state, action) => {
      state.food[action.payload].amount = 1;
    },
    reset: (state) => {
      state.food = initialState.food;
    },
    setFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const { incrementAmount, decrementAmount, clear, reset, setFood } =
  foodSlice.actions;

export default foodSlice.reducer;
