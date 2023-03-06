import React from 'react'; //Import React
import ReactDOM from 'react-dom'; //interacts with DOM
import './index.css' //Import the global CSS file
import App from './App'; //import App component

ReactDOM.render(
    <ReactDOM.StrictMode>
        <App />
    </ReactDOM.StrictMode>, 
    document.getElementById('root'));