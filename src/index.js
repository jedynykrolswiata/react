import React from 'react';
import ReactDOM from 'react-dom';
import  { AppContainer } from './components/MainApp';
import { store } from "./store";
import { Provider } from "react-redux";
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("MainApp")
);
