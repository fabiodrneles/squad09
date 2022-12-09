import React from 'react';
import App from './components/app/App'
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom'



ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
)