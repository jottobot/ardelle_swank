import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
serviceWorker.unregister();
