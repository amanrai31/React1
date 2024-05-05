import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals'; -- This is for performance stats

const root = ReactDOM.createRoot(document.getElementById('root')); 
// This root is taken from index.html as id="root" and stored in root, now we render App in this root

root.render(                         
    <App />         // Babel inject createReact methods that have predefined parameters- Lecture 4
);


