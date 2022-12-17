import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
