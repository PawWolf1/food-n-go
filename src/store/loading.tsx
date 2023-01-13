import { createSlice } from "@reduxjs/toolkit";

export interface SettingsI {
  loading: boolean;
}

const initialState: SettingsI = {
  loading: true,
};
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
