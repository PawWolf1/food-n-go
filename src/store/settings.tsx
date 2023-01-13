import { createSlice } from "@reduxjs/toolkit";

export interface SettingsI {
  loginData: {
    login: string;
    password: string;
  };
}

const initialState: SettingsI = {
  loginData: {
    login: "",
    password: "",
  },
};
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLogged: (state, action) => {},
  },
});

export const { setLogged } = settingsSlice.actions;

export default settingsSlice.reducer;
