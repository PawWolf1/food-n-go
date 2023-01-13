import { createSlice } from "@reduxjs/toolkit";
import { CategoryFilters, FiltersList } from "../locales/filters";
import { FilterI, FilterCatI } from "../models/Filter";

export interface SearchI {
  onPage: number;
  sortBy: FilterI;
  filters: FilterCatI[];
  name: string;
}

const initialState: SearchI = {
  onPage: 15,
  sortBy: FiltersList[0],
  filters: CategoryFilters,
  name: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setOnPage: (state, action) => {
      state.onPage = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setString: (state, action) => {
      state.name = action.payload;
    },
    resetAll: (state) => {
      state.filters = initialState.filters;
      state.name = initialState.name;
      state.sortBy = initialState.sortBy;
      state.onPage = initialState.onPage;
    },
  },
});

export const { setOnPage, setSortBy, setFilters, setString, resetAll } =
  searchSlice.actions;
export default searchSlice.reducer;
