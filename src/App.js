import React from "react";
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/Home';

const App = () => {
  return (
    <>
      <div className='wrap-content'>
        <div className="container">
          <Router>
            <Route basename="/" component={ Home }/>

          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
