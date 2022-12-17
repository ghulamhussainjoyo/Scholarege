import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './src/redux/store';

render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

