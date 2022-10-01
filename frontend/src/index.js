import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";
 
axios.defaults.withCredentials = true;
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);