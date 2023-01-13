import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { HomeScr } from "./screens/Home";
import { MyListsScr } from "./screens/MyLists";
import { OrdersHistoryScr } from "./screens/OrdersHistory";
import { OrderTransactionScr } from "./screens/OrderTransaction";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScr />,
  },
  {
    path: "/MyLists",
    element: <MyListsScr />,
  },
  {
    path: "/OrdersHistory",
    element: <OrdersHistoryScr />,
  },
  {
    path: "/OrderTransaction",
    element: <OrderTransactionScr />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("body") as HTMLElement
);
let persistor = persistStore(store);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
