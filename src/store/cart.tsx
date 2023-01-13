import { createSlice } from "@reduxjs/toolkit";
import { deleteDuplicats } from "../components/functions/deleteDuplicats";
import { Food } from "../models/Food";

export interface CartI {
  cart: Food[];
}

const initialState: CartI = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      state.cart = initialState.cart;
    },
    upgradeCart: (state, action) => {
      let clone = [...state.cart];
      let count = clone
        .filter((data: any) => data.id === action.payload.id)
        .reduce((partialSum, a) => partialSum + a.amount, 0);
      let index = clone.findIndex(
        (data1: any) => data1.id === action.payload.id
      );
      if (count <= 0) {
        state.cart = [...state.cart, action.payload];
      } else {
        state.cart[index].amount += action.payload.amount;
      }
    },
    replaceCart: (state, action) => {
      state.cart = action.payload;
    },
    upgradeCartAdd: (state, action) => {
      state.cart[action.payload].amount += 1;
    },
    upgradeCartDesc: (state, action) => {
      if (state.cart[action.payload].amount > 1)
        state.cart[action.payload].amount -= 1;
    },
    upgradeCartDelete: (state, action) => {
      state.cart = state.cart
        .slice(0, action.payload)
        .concat(state.cart.slice(action.payload + 1));
    },
  },
});

export const {
  upgradeCart,
  clear,
  upgradeCartAdd,
  upgradeCartDesc,
  upgradeCartDelete,
  replaceCart,
} = cartSlice.actions;

export default cartSlice.reducer;
