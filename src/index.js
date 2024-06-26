import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import {thunk} from "redux-thunk";
import { reducerFn } from "./reducers/reducers";


const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducerFn, applyMiddleware(thunk));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
