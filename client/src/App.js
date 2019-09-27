import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login/Login';
import Survey from './Components/Survey/Survey.jsx';

function App() {
  return (
    <Router>
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" href="#">Easy Survey</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/survey">Survey</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/survey" component={Survey}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
