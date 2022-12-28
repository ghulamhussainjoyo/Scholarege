import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./src/css/style.scss";
import { Provider } from "react-redux";
import store from "./src/redux/store";
// import './index.css'
// import 'flowbite'
// import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
