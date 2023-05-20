import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//PRIMEtheme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//PRIMEcore
import 'primereact/resources/primereact.min.css';
import RG from './components/RG';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>    
      <Route path="/" element={<App />} />
      <Route path="/rg" element={<RG />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
