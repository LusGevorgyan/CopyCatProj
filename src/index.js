import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scrollTop/ScrollTop';
import * as ReactDOMClient from "react-dom/client";


const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
