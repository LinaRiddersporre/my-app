import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdessoProject from './AdessoProject/AdessoProject';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/my-app' element={<App />} />
        <Route path='/my-app/adessoProject' element={<AdessoProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
