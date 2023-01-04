import React from 'react';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
//import ReactDOM from "react-dom/client";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Router>
//     <App />
//   </Router>,
// );