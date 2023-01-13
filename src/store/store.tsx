import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import filtersReducer from "./search";
import foodReducer from "./food";
import cartReducer from "./cart";
import myListsReducer from "./lists";
import settingsReducer from "./settings";
import formReducer from "./form";
import popupReducer from "./popup";
import loadingReducer from "./loading";

const reducers = combineReducers({
  search: filtersReducer,
  food: foodReducer,
  cart: cartReducer,
  lists: myListsReducer,
  setPopup: popupReducer,
  form: formReducer,
  loading: loadingReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
