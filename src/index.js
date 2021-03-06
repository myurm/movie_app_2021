import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import App from './App';
import history from "./utils/history";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);