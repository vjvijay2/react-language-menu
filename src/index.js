// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Remove or comment out these lines if you don't need performance metrics
// import reportWebVitals from './reportWebVitals';

// ReactDOM rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove or comment out this line if you removed the reportWebVitals import
// reportWebVitals();
