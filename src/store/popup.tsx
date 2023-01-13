import { createSlice } from "@reduxjs/toolkit";
import { getString } from "../locales/languages/string";

export interface PopupI {
  popup: {
    isActive: boolean;
    message: string;
    type: string;
    onConfirm: any;
    register?: any;
    other?: any;
  };
}

const initialState: PopupI = {
  popup: {
    isActive: false,
    message: "",
    type: "",
    onConfirm: null,
    register: null,
    other: null,
  },
};
export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopup: (state, action) => {
      state.popup = {
        isActive: true,
        message: getString("message", action.payload.message),
        type: action.payload.type,
        onConfirm: action.payload.onConfirm,
        register: action.payload.register,
        other: action.payload.other,
      };
    },
    closePopup: (state) => {
      state.popup = {
        isActive: false,
        message: "",
        type: "",
        onConfirm: null,
        register: null,
        other: null,
      };
    },
  },
});

export const { setPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
