import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import Registration from './components/Auth/Registration';
import AdminPanel from './components/AdminPanel';
import CheckOut from './components/CheckOut';
import Dashboard from './components/Dashboard';
import PizzaSelection from './components/PizzaSelection';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/registration" component={Registration} />
        <Route path="/admin-panel" component={AdminPanel} />
        <Route path="/check-out" component={CheckOut} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pizza-selection" component={PizzaSelection} />
      </Switch>
    </Router>

    
    </div>

    
  );
}

export default App;
