import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./redux/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
