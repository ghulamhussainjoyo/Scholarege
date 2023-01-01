import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom";
import App from "./src/App";
import "./src/website/css/style.scss";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import "./index.css";
import "flowbite";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
