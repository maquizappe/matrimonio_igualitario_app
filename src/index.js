import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cover from './components/cover/cover';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cover />
  </React.StrictMode>
);


reportWebVitals();
