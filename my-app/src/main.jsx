// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';


axios.defaults.baseURL = 'https://lewe-backend-yv3c.onrender.com';
//axios.defaults.baseURL = 'https://lewe-backend-yv3c.onrender.com';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
)
