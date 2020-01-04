import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/anon/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
