import { createSlice } from "@reduxjs/toolkit";
import { OrderFormI } from "../models/OrderForm";

export interface FormI {
  data: OrderFormI;
}

const initialState: FormI = {
  data: {
    accessCode: "",
    city: "",
    companyName: "",
    deliveryTime: "",
    firstLastName: "",
    floor: "",
    email: "",
    flatNumber: "",
    houseNumber: "",
    payWith: "",
    phoneNumber: "",
    postcode: "",
    streetName: "",
    note: "",
    voutcher: "",
  },
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      let newState = Object.assign({}, state.data);
      switch (action.payload.upgr) {
        case `accessCode`:
          newState["accessCode"] = action.payload.value;
          break;
        case `city`:
          newState["city"] = action.payload.value;
          break;
        case `companyName`:
          newState["companyName"] = action.payload.value;
          break;
        case `deliveryTime`:
          newState["deliveryTime"] = action.payload.value;
          break;
        case `firstLastName`:
          newState["firstLastName"] = action.payload.value;
          break;
        case `floor`:
          newState["floor"] = action.payload.value;
          break;
        case `email`:
          newState["email"] = action.payload.value;
          break;
        case `flatNumber`:
          newState["flatNumber"] = action.payload.value;
          break;
        case `houseNumber`:
          newState["houseNumber"] = action.payload.value;
          break;
        case `payWith`:
          newState["payWith"] = action.payload.value;
          break;
        case `phoneNumber`:
          newState["phoneNumber"] = action.payload.value;
          break;
        case `postcode`:
          newState["postcode"] = action.payload.value;
          break;
        case `streetName`:
          newState["streetName"] = action.payload.value;
          break;
        case `note`:
          newState["note"] = action.payload.value;
          break;
        case `voutcher`:
          newState["voutcher"] = action.payload.value;
          break;
        case `all`:
          newState = action.payload.value;
          break;
        default:
          break;
      }
      state.data = newState;
    },
    setAccess: (state, action) => {
      state.data["accessCode"] = action.payload;
    },
    clearForm: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { clearForm, setForm } = formSlice.actions;

export default formSlice.reducer;
