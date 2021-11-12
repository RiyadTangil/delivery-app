import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={createBrowserHistory}>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
