// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
