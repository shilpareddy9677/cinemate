import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import {BrowserRouter as Router} from 'react-router-dom'
import {ScrollToTop} from "./component";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ScrollToTop/>
            <App /> 
        </Router>      
    </React.StrictMode>
)