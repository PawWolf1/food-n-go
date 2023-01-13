import { createSlice } from "@reduxjs/toolkit";

export interface ListsI {
  history: any[];
  myLists: any[];
}

const initialState: ListsI = {
  history: [],
  myLists: [],
};
export const myListsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setMyLists: (state, action) => {
      state.myLists = action.payload;
    },
    resetHistory: (state) => {
      state.history = initialState.history;
    },
    addMyLists: (state, action) => {
      state.myLists = [...state.myLists, action.payload];
    },

    setHistory: (state, action) => {
      [state.history] = [action.payload];
    },
    addHistory: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    deleteMyListElement: (state, action) => {
      state.myLists = state.myLists
        .slice(0, action.payload)
        .concat(state.myLists.slice(action.payload + 1));
    },
    resetAll: (state) => {
      state.history = initialState.history;
      state.myLists = initialState.myLists;
    },
  },
});

export const {
  setMyLists,
  setHistory,
  deleteMyListElement,
  addMyLists,
  resetHistory,
  addHistory,
  resetAll,
} = myListsSlice.actions;

export default myListsSlice.reducer;
