import React from 'react'; //Import React
import ReactDOM from 'react-dom/client'; //interacts with DOM
import './index.css' //Import the global CSS file
import App from './App'; //import App component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//root 
ReactDOM.createRoot(
    document.getElementById('root')).render(
            <App />
);