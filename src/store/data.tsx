import { createSlice } from "@reduxjs/toolkit";

export interface FiltersI {
  data: any;
  number: number;
}

const initialState: FiltersI = {
  data: [],
  number: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    incrementByAmount: (state, action) => {
      state.number += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
