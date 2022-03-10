import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import {createBrowserHistory} from "history";

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Router>,
  document.getElementById('root')
)
